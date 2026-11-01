const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--no-sandbox',
  '--disable-extensions',
  'file:///c:/antigravity3/index.html'
]);

chrome.stderr.on('data', (d) => {});
chrome.stdout.on('data', (d) => {});

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    console.log('Chrome tabs found:', tabs.length);
    const pageTab = tabs.find(t => t.type === 'page');
    if (!pageTab) {
      console.log('No page tab found');
      chrome.kill();
      return;
    }

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    let msgId = 1;
    const pending = {};

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        pending[id] = resolve;
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    ws.on('open', async () => {
      console.log('Connected to Chrome DevTools WebSocket');
      await send('Runtime.enable');
      await send('Console.enable');
      await send('Page.enable');

      // Check current subject in page
      const eval1 = await send('Runtime.evaluate', {
        expression: '({ subject: typeof currentSubject !== "undefined" ? currentSubject : null, bodyClass: document.body.className, portalHidden: document.getElementById("subject-selection-portal").classList.contains("portal-hidden") })',
        returnByValue: true
      });
      console.log('Initial state in browser:', eval1.result?.result?.value);

      // Try calling selectSubjectAndEnter('biologi')
      console.log('Simulating click on selectSubjectAndEnter("biologi")...');
      const clickResult = await send('Runtime.evaluate', {
        expression: 'try { selectSubjectAndEnter("biologi"); ({ success: true }); } catch (err) { ({ error: err.message, stack: err.stack }); }',
        returnByValue: true
      });
      console.log('Click result:', clickResult.result?.result?.value);

      // Check state after click
      const eval2 = await send('Runtime.evaluate', {
        expression: '({ subject: currentSubject, babId: currentBabId, bodyClass: document.body.className, portalHidden: document.getElementById("subject-selection-portal").classList.contains("portal-hidden"), heroTitle: document.getElementById("hero-main-title").innerText, activeLabel: document.getElementById("active-subject-label").innerText })',
        returnByValue: true
      });
      console.log('State after click in browser:', eval2.result?.result?.value);

      ws.close();
      chrome.kill();
      process.exit(0);
    });

    ws.on('message', (data) => {
      const msg = JSON.parse(data);
      if (msg.id && pending[msg.id]) {
        pending[msg.id](msg);
        delete pending[msg.id];
      }
      if (msg.method === 'Console.messageAdded') {
        console.log('[BROWSER CONSOLE]', msg.params.message.text);
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('[BROWSER EXCEPTION]', msg.params.exceptionDetails);
      }
    });

  } catch (err) {
    console.error('Error connecting to Chrome:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1500);

const { execFileSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

// Replace relative script src with absolute file URLs
html = html.replace(/src="data/g, 'src="file:///c:/antigravity3/data');
html = html.replace(/src="app.js"/g, 'src="file:///c:/antigravity3/app.js"');

const headScript = '<script>window.testErrors = []; window.onerror = function(m,u,l,c,e) { window.testErrors.push({m:m,u:u,l:l,c:c,stack: e?e.stack:null}); };</script>';
html = html.replace('<head>', '<head>' + headScript);

const bottomScript = `
<script>
window.testLog = [];
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    try {
      window.testLog.push('Clicking .card-biologi...');
      var card = document.querySelector('.card-biologi');
      if (!card) {
        window.testLog.push('ERROR: .card-biologi not found');
      } else {
        card.click();
      }

      setTimeout(function() {
        window.testLog.push('After click: currentSubject=' + currentSubject);
        window.testLog.push('portal hidden=' + document.getElementById('subject-selection-portal').classList.contains('portal-hidden'));
        window.testLog.push('body class=' + document.body.className);
        window.testLog.push('hero title=' + document.getElementById('hero-main-title').innerText);
        window.testLog.push('active label=' + document.getElementById('active-subject-label').innerText);

        var div = document.createElement('div');
        div.id = 'TEST_OUTPUT';
        div.textContent = JSON.stringify({ log: window.testLog, errors: window.testErrors });
        document.body.appendChild(div);
      }, 500);
    } catch(err) {
      window.testLog.push('CATCH: ' + err.message + ' ' + err.stack);
      var div = document.createElement('div');
      div.id = 'TEST_OUTPUT';
      div.textContent = JSON.stringify({ log: window.testLog, errors: window.testErrors });
      document.body.appendChild(div);
    }
  }, 500);
});
</script>
`;

html = html.replace('</body>', bottomScript + '</body>');
fs.writeFileSync('c:/antigravity3/scratch/test-real-click.html', html, 'utf8');

const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=3000',
  '--dump-dom',
  'file:///c:/antigravity3/scratch/test-real-click.html'
], { encoding: 'utf8' });

const match = out.match(/<div id="TEST_OUTPUT">(.*?)<\/div>/);
if (match) {
  const data = JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
  console.log('TEST LOG:');
  data.log.forEach(l => console.log('  ', l));
  console.log('ERRORS:');
  if (data.errors.length === 0) console.log('   NONE! Zero errors.');
  data.errors.forEach(e => console.log('  ', e));
} else {
  console.log('No TEST_OUTPUT found');
}

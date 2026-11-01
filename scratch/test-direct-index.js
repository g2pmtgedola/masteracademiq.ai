const { execFileSync } = require('child_process');

try {
  const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--enable-logging=stderr',
    '--v=1',
    '--virtual-time-budget=2000',
    '--dump-dom',
    'file:///c:/antigravity3/index.html'
  ], { encoding: 'utf8' });

  console.log('index.html loaded in Chrome. Length:', out.length);
  // Check if BIOLOGI is in the rendered DOM
  console.log('Contains BIOLOGI TINGKATAN 4:', out.includes('BIOLOGI TINGKATAN 4'));
} catch (err) {
  console.error('Chrome execution error:', err);
}

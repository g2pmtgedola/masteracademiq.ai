const { execFileSync } = require('child_process');
const fs = require('fs');

const testHtml = `<!DOCTYPE html><html><head>
<script src="data-biologi.js?v=2.1"></script>
<script>
window.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  div.id = 'OUT';
  div.textContent = typeof BIOLOGI_DATA !== 'undefined' ? 'LOADED ' + BIOLOGI_DATA.length : 'NOT LOADED';
  document.body.appendChild(div);
});
</script>
</head><body></body></html>`;

fs.writeFileSync('c:/antigravity3/test-query.html', testHtml, 'utf8');

const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///c:/antigravity3/test-query.html'
], { encoding: 'utf8' });

fs.unlinkSync('c:/antigravity3/test-query.html');
const m = out.match(/<div id="OUT">(.*?)<\/div>/);
console.log('Result:', m ? m[1] : 'No OUT div');

const { execFileSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

// Inject error handler at very top of <head>
const headScript = `
<script>
window.testErrors = [];
window.onerror = function(msg, url, line, col, err) {
  window.testErrors.push({ msg, url, line, col, stack: err ? err.stack : null });
  console.error('ERROR CAPTURED:', msg, url, line, col);
};
</script>
`;
html = html.replace('<head>', '<head>' + headScript);

const bottomScript = `
<script>
setTimeout(() => {
  const div = document.createElement('div');
  div.id = 'ERROR_LOG_DIV';
  div.textContent = JSON.stringify(window.testErrors);
  document.body.appendChild(div);
}, 200);
</script>
`;
html = html.replace('</body>', bottomScript + '</body>');
fs.writeFileSync('c:/antigravity3/scratch/test-head-error.html', html, 'utf8');

const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///c:/antigravity3/scratch/test-head-error.html'
], { encoding: 'utf8' });

const match = out.match(/<div id="ERROR_LOG_DIV">(.*?)<\/div>/);
if (match) {
  console.log('ALL ERRORS CAPTURED DURING PAGE LOAD:');
  const errors = JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
  if (errors.length === 0) {
    console.log('No errors captured during page load!');
  } else {
    errors.forEach(e => console.log('  ->', e));
  }
} else {
  console.log('No ERROR_LOG_DIV found');
}

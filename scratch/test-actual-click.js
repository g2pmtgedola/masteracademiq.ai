const { execFileSync } = require('child_process');
const fs = require('fs');

// We copy index.html to scratch/test-click-index.html and append a test script at the end
let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

// Inject test script before </body>
const testScript = `
<script>
window.testResults = [];
window.onerror = function(msg, url, line, col, err) {
  window.testResults.push('WINDOW ONERROR: ' + msg + ' at ' + line + ':' + col + ' ' + (err ? err.stack : ''));
};

setTimeout(() => {
  try {
    const cardBio = document.querySelector('.card-biologi');
    if (!cardBio) {
      window.testResults.push('FAIL: .card-biologi not found in DOM!');
      return;
    }
    window.testResults.push('FOUND .card-biologi. Clicking it now...');
    cardBio.click();

    setTimeout(() => {
      const portal = document.getElementById('subject-selection-portal');
      const isPortalHidden = portal.classList.contains('portal-hidden');
      const currentSubj = typeof currentSubject !== 'undefined' ? currentSubject : 'UNDEFINED';
      const currentBab = typeof currentBabId !== 'undefined' ? currentBabId : 'UNDEFINED';
      const bodyClass = document.body.className;
      const heroTitle = document.getElementById('hero-main-title') ? document.getElementById('hero-main-title').innerText : 'NO HERO TITLE';
      const activeLabel = document.getElementById('active-subject-label') ? document.getElementById('active-subject-label').innerText : 'NO LABEL';

      window.testResults.push('RESULT: isPortalHidden=' + isPortalHidden + ', currentSubject=' + currentSubj + ', currentBabId=' + currentBab + ', bodyClass=' + bodyClass + ', heroTitle=' + heroTitle + ', activeLabel=' + activeLabel);

      const div = document.createElement('div');
      div.id = 'FINAL_TEST_OUTPUT';
      div.textContent = JSON.stringify(window.testResults);
      document.body.appendChild(div);
    }, 500);

  } catch (err) {
    window.testResults.push('EXCEPTION IN CLICK SCRIPT: ' + err.message + ' ' + err.stack);
    const div = document.createElement('div');
    div.id = 'FINAL_TEST_OUTPUT';
    div.textContent = JSON.stringify(window.testResults);
    document.body.appendChild(div);
  }
}, 300);
</script>
`;

html = html.replace('</body>', testScript + '</body>');
fs.writeFileSync('c:/antigravity3/scratch/test-click-index.html', html, 'utf8');

const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=3000',
  '--dump-dom',
  'file:///c:/antigravity3/scratch/test-click-index.html'
], { encoding: 'utf8' });

const match = out.match(/<div id="FINAL_TEST_OUTPUT">(.*?)<\/div>/);
if (match) {
  console.log('TEST RESULTS FROM REAL CHROME ENGINE:');
  const results = JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
  results.forEach(r => console.log('  -> ' + r));
} else {
  console.log('No test output div found. Dump:');
  console.log(out.slice(0, 1000));
}

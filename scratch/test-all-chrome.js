const { execFileSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

const testScript = `
<script>
window.testResults = [];
window.addEventListener('DOMContentLoaded', () => {
  const subjects = ['sejarah', 'sains', 'matematik', 'kimia', 'fizik', 'biologi'];
  let idx = 0;

  function testNext() {
    if (idx >= subjects.length) {
      const outDiv = document.createElement('div');
      outDiv.id = 'ALL_SUBJECTS_OUTPUT';
      outDiv.textContent = JSON.stringify(window.testResults);
      document.body.appendChild(outDiv);
      return;
    }
    const subj = subjects[idx++];
    try {
      selectSubjectAndEnter(subj);
      const isHidden = document.getElementById('subject-selection-portal').classList.contains('portal-hidden');
      const title = document.getElementById('hero-main-title').innerText;
      window.testResults.push({ subj: subj, currentSubject: currentSubject, portalHidden: isHidden, heroTitle: title, success: true });
    } catch (e) {
      window.testResults.push({ subj: subj, error: e.message, success: false });
    }
    openSubjectPortal();
    setTimeout(testNext, 100);
  }

  setTimeout(testNext, 200);
});
</script>
`;

html = html.replace('</body>', testScript + '</body>');
fs.writeFileSync('c:/antigravity3/test-all-subjects.html', html, 'utf8');

const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=3000',
  '--dump-dom',
  'file:///c:/antigravity3/test-all-subjects.html'
], { encoding: 'utf8' });

fs.unlinkSync('c:/antigravity3/test-all-subjects.html');

const match = out.match(/<div id="ALL_SUBJECTS_OUTPUT">(.*?)<\/div>/);
if (match) {
  const list = JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
  console.log('ALL 6 SUBJECTS TEST RESULTS IN CHROME:');
  list.forEach(item => {
    console.log(`  -> [${item.subj.toUpperCase()}]: success=${item.success}, portalHidden=${item.portalHidden}, hero="${item.heroTitle}"`);
  });
} else {
  console.log('No ALL_SUBJECTS_OUTPUT found');
}

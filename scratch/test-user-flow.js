const { execFileSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

const testScript = `
<script>
window.flowLogs = [];
window.onerror = function(msg, url, line, col, err) {
  window.flowLogs.push('ERROR: ' + msg + ' at ' + line + ':' + col + ' ' + (err ? err.stack : ''));
};

window.addEventListener('DOMContentLoaded', () => {
  window.flowLogs.push('1. DOMContentLoaded fired');
  window.flowLogs.push('Initial subject: ' + (typeof currentSubject !== 'undefined' ? currentSubject : 'none'));

  setTimeout(() => {
    // Simulate user clicking switch subject to open portal
    window.flowLogs.push('2. User opens portal');
    openSubjectPortal();
    window.flowLogs.push('Portal hidden? ' + document.getElementById('subject-selection-portal').classList.contains('portal-hidden'));

    setTimeout(() => {
      // Simulate user clicking on Biologi card
      window.flowLogs.push('3. User clicks Biologi card');
      const bioCard = document.querySelector('.card-biologi');
      const bioBtn = document.querySelector('.btn-biology-enter');
      window.flowLogs.push('bioCard exists: ' + !!bioCard + ', bioBtn exists: ' + !!bioBtn);

      try {
        bioCard.click();
        window.flowLogs.push('4. Click executed without synchronous throw');
      } catch (e) {
        window.flowLogs.push('4. Click threw: ' + e.message + ' ' + e.stack);
      }

      setTimeout(() => {
        window.flowLogs.push('5. Final state:');
        window.flowLogs.push('   currentSubject: ' + currentSubject);
        window.flowLogs.push('   currentBabId: ' + currentBabId);
        window.flowLogs.push('   portal hidden: ' + document.getElementById('subject-selection-portal').classList.contains('portal-hidden'));
        window.flowLogs.push('   body class: ' + document.body.className);
        window.flowLogs.push('   hero title: ' + document.getElementById('hero-main-title').innerText);
        window.flowLogs.push('   active subject label: ' + document.getElementById('active-subject-label').innerText);
        window.flowLogs.push('   chapter pills count: ' + document.querySelectorAll('.chapter-pill-card').length);
        window.flowLogs.push('   notes cards count: ' + document.querySelectorAll('.note-card').length);
        window.flowLogs.push('   step cards count: ' + document.querySelectorAll('.step-item-card').length);
        window.flowLogs.push('   keypoint cards count: ' + document.querySelectorAll('.kp-card').length);
        window.flowLogs.push('   quiz cards count: ' + document.querySelectorAll('.q-card').length);
        window.flowLogs.push('   struktur cards count: ' + document.querySelectorAll('.struktur-card').length);

        const outDiv = document.createElement('div');
        outDiv.id = 'FLOW_OUTPUT';
        outDiv.textContent = JSON.stringify(window.flowLogs);
        document.body.appendChild(outDiv);
      }, 500);

    }, 300);
  }, 300);
});
</script>
`;

html = html.replace('</body>', testScript + '</body>');
fs.writeFileSync('c:/antigravity3/scratch/test-flow.html', html, 'utf8');

const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=3000',
  '--dump-dom',
  'file:///c:/antigravity3/scratch/test-flow.html'
], { encoding: 'utf8' });

const match = out.match(/<div id="FLOW_OUTPUT">(.*?)<\/div>/);
if (match) {
  const logs = JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
  console.log('FLOW LOGS:');
  logs.forEach(l => console.log('  -> ' + l));
} else {
  console.log('No FLOW_OUTPUT found');
}

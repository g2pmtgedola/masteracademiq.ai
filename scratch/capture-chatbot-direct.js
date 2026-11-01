const { execFileSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

// Hide hero section and portal just for this focused view of the learning workspace
const script = `
<script>
window.addEventListener('DOMContentLoaded', () => {
  selectSubjectAndEnter('sejarah');
  document.getElementById('subject-selection-portal').style.display = 'none';
  document.getElementById('hero-section').style.display = 'none';
  switchMainView('chatbot', false);
  askSuggestedQuestion('Ringkaskan konsep penting BAB 1');
});
</script>
`;

html = html.replace('</body>', script + '</body>');
fs.writeFileSync('c:/antigravity3/screenshot-direct.html', html, 'utf8');

execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1280,1050',
  '--virtual-time-budget=3000',
  '--screenshot=c:\\antigravity3\\scratch\\chatbot-direct-view.png',
  'file:///c:/antigravity3/screenshot-direct.html'
]);

fs.unlinkSync('c:/antigravity3/screenshot-direct.html');
console.log('Saved to c:/antigravity3/scratch/chatbot-direct-view.png');

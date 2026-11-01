const { execFileSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

const script = `
<script>
window.addEventListener('DOMContentLoaded', () => {
  selectSubjectAndEnter('sejarah');
  document.getElementById('subject-selection-portal').style.display = 'none';
  switchMainView('chatbot', false);
  askSuggestedQuestion('Ringkaskan konsep penting BAB 1');
  
  // Also check bounding rect
  setTimeout(() => {
    const el = document.getElementById('view-chatbot');
    const rect = el.getBoundingClientRect();
    window.cbRect = rect;
    window.scrollTo(0, window.scrollY + rect.top - 80);
  }, 500);
});
</script>
`;

html = html.replace('</body>', script + '</body>');
fs.writeFileSync('c:/antigravity3/screenshot-test2.html', html, 'utf8');

execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1280,1200',
  '--virtual-time-budget=2000',
  '--screenshot=c:\\antigravity3\\scratch\\chatbot-view.png',
  'file:///c:/antigravity3/screenshot-test2.html'
]);

fs.unlinkSync('c:/antigravity3/screenshot-test2.html');
console.log('Saved to c:/antigravity3/scratch/chatbot-view.png');

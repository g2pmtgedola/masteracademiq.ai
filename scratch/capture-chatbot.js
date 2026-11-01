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
  setTimeout(() => {
    document.getElementById('view-chatbot').scrollIntoView({ behavior: 'instant', block: 'start' });
    const readyDiv = document.createElement('div');
    readyDiv.id = 'READY';
    document.body.appendChild(readyDiv);
  }, 600);
});
</script>
`;

html = html.replace('</body>', script + '</body>');
fs.writeFileSync('c:/antigravity3/screenshot-test.html', html, 'utf8');

execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1280,1100',
  '--virtual-time-budget=3000',
  '--screenshot=c:\\antigravity3\\scratch\\chatbot-active.png',
  'file:///c:/antigravity3/screenshot-test.html'
]);

fs.unlinkSync('c:/antigravity3/screenshot-test.html');
console.log('Chatbot screenshot saved to c:/antigravity3/scratch/chatbot-active.png');

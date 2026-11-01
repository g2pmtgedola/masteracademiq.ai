const { execFileSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

const testScript = `
<script>
window.testLog = [];
window.errors = [];
window.onerror = function(msg, url, line) {
  window.errors.push({ msg, line });
};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    try {
      // 1. Test Sejarah 10 Bab & Subtopics
      selectSubjectAndEnter('sejarah');
      const sejarahChapters = getActiveSubjectData();
      window.testLog.push({
        test: 'sejarah_chapters',
        count: sejarahChapters.length,
        babTitles: sejarahChapters.map(b => b.babNum + ': ' + b.title),
        subtopicsCount: sejarahChapters.reduce((acc, b) => acc + b.notes.length, 0)
      });

      // 2. Test Chatbot UI in Sejarah Bab 1
      switchMainView('chatbot', false);
      const cbViewActive = document.getElementById('view-chatbot').classList.contains('active');
      const cbName = document.getElementById('cb-tutor-name').innerText;
      const cbPill = document.getElementById('cb-chapter-pill').innerText;
      const chips = Array.from(document.querySelectorAll('#cb-chips-container .cb-chip')).map(c => c.innerText.trim());

      window.testLog.push({
        test: 'chatbot_bab1',
        cbViewActive,
        cbName,
        cbPill,
        chipsCount: chips.length,
        sampleChip: chips[0]
      });

      // 3. Ask question via Chatbot
      askSuggestedQuestion('Terangkan konsep Waadat');
      
      // Allow async reply
      setTimeout(() => {
        const msgs = Array.from(document.querySelectorAll('#cb-messages-area .cb-msg-row'));
        const userMsg = msgs.find(m => m.classList.contains('user-row'));
        const tutorMsg = msgs.find(m => m.classList.contains('tutor-row') && !m.id.includes('typing'));
        
        window.testLog.push({
          test: 'chatbot_answer_bab1',
          totalMessages: msgs.length,
          userText: userMsg ? userMsg.innerText.trim() : null,
          tutorSnippet: tutorMsg ? tutorMsg.innerText.slice(0, 150) : null,
          userXP: userXP
        });

        // 4. Test Switching to Bab 6 (Ancaman Komunis)
        handleChapterChange('bab6');
        switchMainView('chatbot', false);
        const cbPillBab6 = document.getElementById('cb-chapter-pill').innerText;
        const chipsBab6 = Array.from(document.querySelectorAll('#cb-chips-container .cb-chip')).map(c => c.innerText.trim());

        window.testLog.push({
          test: 'chatbot_bab6',
          cbPillBab6,
          chipsBab6Count: chipsBab6.length,
          sampleChipBab6: chipsBab6[1]
        });

        // 5. Test all other 5 subjects
        const otherSubjects = ['sains', 'matematik', 'kimia', 'fizik', 'biologi'];
        const otherResults = [];
        otherSubjects.forEach(s => {
          selectSubjectAndEnter(s);
          const tName = document.getElementById('cb-tutor-name').innerText;
          const hero = document.getElementById('hero-main-title').innerText;
          otherResults.push({ subject: s, tutorName: tName, heroTitle: hero });
        });

        window.testLog.push({
          test: 'other_subjects_tutor',
          otherResults
        });

        const out = document.createElement('div');
        out.id = 'TEST_OUTPUT_DIV';
        out.textContent = JSON.stringify({ log: window.testLog, errors: window.errors });
        document.body.appendChild(out);
      }, 700);

    } catch (err) {
      window.errors.push({ error: err.message, stack: err.stack });
      const out = document.createElement('div');
      out.id = 'TEST_OUTPUT_DIV';
      out.textContent = JSON.stringify({ log: window.testLog, errors: window.errors });
      document.body.appendChild(out);
    }
  }, 300);
});
</script>
`;

html = html.replace('</body>', testScript + '</body>');
fs.writeFileSync('c:/antigravity3/test-run-suite.html', html, 'utf8');

try {
  const out = execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--virtual-time-budget=4000',
    '--dump-dom',
    'file:///c:/antigravity3/test-run-suite.html'
  ], { encoding: 'utf8' });

  fs.unlinkSync('c:/antigravity3/test-run-suite.html');

  const match = out.match(/<div id="TEST_OUTPUT_DIV">(.*?)<\/div>/);
  if (match) {
    const raw = match[1].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    const result = JSON.parse(raw);
    console.log('=== CHROME TEST RESULTS ===');
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log('No TEST_OUTPUT_DIV found.');
  }
} catch (e) {
  if (fs.existsSync('c:/antigravity3/test-run-suite.html')) {
    fs.unlinkSync('c:/antigravity3/test-run-suite.html');
  }
  console.error('Execution error:', e);
}

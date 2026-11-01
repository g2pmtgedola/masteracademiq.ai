const fs = require('fs');
const vm = require('vm');

const d1 = fs.readFileSync('c:/antigravity3/data.js', 'utf8');
const d2 = fs.readFileSync('c:/antigravity3/data-sains.js', 'utf8');
const d3 = fs.readFileSync('c:/antigravity3/data-matematik.js', 'utf8');
const d4 = fs.readFileSync('c:/antigravity3/data-kimia.js', 'utf8');
const d5 = fs.readFileSync('c:/antigravity3/data-fizik.js', 'utf8');
const d6 = fs.readFileSync('c:/antigravity3/data-biologi.js', 'utf8');
const appCode = fs.readFileSync('c:/antigravity3/app.js', 'utf8');

const elementStore = {};
function getOrCreate(id) {
  if (!elementStore[id]) {
    elementStore[id] = {
      id: id,
      textContent: '',
      innerHTML: '',
      style: {},
      classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false
      },
      appendChild: () => {},
      addEventListener: () => {}
    };
  }
  return elementStore[id];
}

const sandbox = {
  console: console,
  document: {
    getElementById: (id) => getOrCreate(id),
    querySelectorAll: () => [],
    querySelector: () => null,
    createElement: () => ({ classList: { add: () => {} }, innerHTML: '', setAttribute: () => {} }),
    body: { className: '' },
    addEventListener: () => {}
  },
  localStorage: {
    store: {},
    getItem: function(k) { return this.store[k] || null; },
    setItem: function(k, v) { this.store[k] = v; }
  },
  window: {},
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: () => {},
  clearInterval: () => {}
};

vm.createContext(sandbox);
vm.runInContext(d1, sandbox);
vm.runInContext(d2, sandbox);
vm.runInContext(d3, sandbox);
vm.runInContext(d4, sandbox);
vm.runInContext(d5, sandbox);
vm.runInContext(d6, sandbox);
vm.runInContext(appCode, sandbox);

console.log('--- STARTING FULL SUITE TEST ---');
const subjects = ['sejarah', 'sains', 'matematik', 'kimia', 'fizik', 'biologi'];

subjects.forEach(subj => {
  sandbox.setSubject(subj, false);
  const data = sandbox.getActiveSubjectData();
  console.log(`Testing subject [${subj.toUpperCase()}]: ${data.length} Bab`);

  data.forEach((bab, idx) => {
    sandbox.handleChapterChange(bab.id);
    sandbox.renderActiveChapterContent();
    sandbox.openFlashcardModal();
    sandbox.closeFlashcardModal();
  });

  sandbox.initComprehensiveExam("all");
  sandbox.renderVerbatimArchive("");
  sandbox.filterVerbatimArchive("a");
  sandbox.handleQuickSearch("k");
});

console.log('--- FULL SUITE TEST COMPLETED WITH ZERO ERRORS! ---');

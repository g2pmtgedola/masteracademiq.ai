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
    getItem: () => null,
    setItem: () => {}
  },
  window: {},
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: () => {},
  clearInterval: () => {}
};

try {
  vm.createContext(sandbox);
  vm.runInContext(d1, sandbox);
  vm.runInContext(d2, sandbox);
  vm.runInContext(d3, sandbox);
  vm.runInContext(d4, sandbox);
  vm.runInContext(d5, sandbox);
  vm.runInContext(d6, sandbox);
  vm.runInContext(appCode, sandbox);
  console.log('App code loaded successfully.');

  // Test setSubject('biologi')
  console.log('Running setSubject("biologi")...');
  sandbox.setSubject('biologi');
  console.log('SUCCESS! setSubject("biologi") finished without crashing.');
  console.log('currentSubject:', sandbox.currentSubject);
  console.log('currentBabId:', sandbox.currentBabId);
  console.log('body.className:', sandbox.document.body.className);
} catch (err) {
  console.error('CRASH DETECTED:');
  console.error(err);
}

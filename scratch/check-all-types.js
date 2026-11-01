const fs = require('fs');
['data.js', 'data-sains.js', 'data-matematik.js', 'data-kimia.js', 'data-fizik.js', 'data-biologi.js'].forEach(f => {
  let content = fs.readFileSync('c:/antigravity3/' + f, 'utf8');
  let match = content.match(/const\s+([A-Z_]+_DATA)\s*=/);
  if (match) {
    let varName = match[1];
    let code = content.replace(match[0], 'global.' + varName + ' =');
    eval(code);
    let sample = global[varName][0];
    console.log(varName, ':');
    console.log('  notes.verbatim is array?:', Array.isArray(sample.notes[0].verbatim));
    console.log('  notes.explanation is string?:', typeof sample.notes[0].explanation === 'string');
    console.log('  steps[0] keys:', Object.keys(sample.steps[0]), 'types:', typeof sample.steps[0].title, typeof sample.steps[0].guide || typeof sample.steps[0].desc);
    console.log('  questions[0].options is array?:', Array.isArray(sample.questions[0].options));
    console.log('  struktur[0].skema is array?:', Array.isArray(sample.struktur[0].skema));
  }
});

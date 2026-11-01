const fs = require('fs');
['data.js', 'data-sains.js', 'data-matematik.js', 'data-kimia.js', 'data-fizik.js', 'data-biologi.js'].forEach(f => {
  let content = fs.readFileSync('c:/antigravity3/' + f, 'utf8');
  let match = content.match(/const\s+([A-Z_]+_DATA)\s*=/);
  if (match) {
    let varName = match[1];
    let code = content.replace(match[0], 'global.' + varName + ' =');
    eval(code);
    let sampleStruktur = global[varName][0].struktur[0];
    console.log(varName, 'struktur.skema type:', Array.isArray(sampleStruktur.skema) ? 'ARRAY' : typeof sampleStruktur.skema);
  }
});

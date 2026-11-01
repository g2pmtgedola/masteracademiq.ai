const fs = require('fs');

let content = fs.readFileSync('c:/antigravity3/data-biologi.js', 'utf8');
let match = content.match(/const\s+BIOLOGI_DATA\s*=/);
let code = content.replace(match[0], 'global.BIOLOGI_DATA =');
eval(code);

global.BIOLOGI_DATA.forEach(bab => {
  bab.notes.forEach(note => {
    if (!note.verbatim && note.points) {
      note.verbatim = note.points;
    }
    if (!note.explanation && note.summary) {
      note.explanation = note.summary;
    }
  });
});

const header = `/* ==========================================================================
   DATA-BIOLOGI.JS — 100% BAHAN BUKU TEKS BIOLOGI TINGKATAN 4 KSSM
   Sumber: https://online.anyflip.com/gzctj/nnvp/mobile/index.html
   Tema 1: Asas Biologi (Bab 1 - 7)
   Tema 2: Fisiologi Manusia dan Haiwan (Bab 8 - 15)
   ========================================================================== */\n\n`;

const newContent = header + 'const BIOLOGI_DATA = ' + JSON.stringify(global.BIOLOGI_DATA, null, 2) + ';\n';
fs.writeFileSync('c:/antigravity3/data-biologi.js', newContent, 'utf8');

console.log('Successfully updated data-biologi.js with verbatim and explanation properties!');

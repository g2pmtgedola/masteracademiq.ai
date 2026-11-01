const fs = require('fs');

const chapters = [];
for (let i = 1; i <= 10; i++) {
  const chapterData = JSON.parse(fs.readFileSync(`c:/antigravity3/scratch/b${i}.json`, 'utf8'));
  chapters.push(chapterData);
}

const fileHeader = `/* ==========================================================================
   DATA.JS — 100% BAHAN LENGKAP BUKU TEKS SEJARAH KSSM TINGKATAN 4
   Sumber Rasmi: https://online.anyflip.com/bmbjm/ctdh/mobile/index.html#p=3
   Semua 10 Bab & 54 Subtopik Lengkap Tanpa Sebarang Tertinggal
   ========================================================================== */

const SEJARAH_DATA = `;

const fileContent = fileHeader + JSON.stringify(chapters, null, 2) + `;\n\nif (typeof module !== 'undefined') {\n  module.exports = { SEJARAH_DATA };\n}\n`;

fs.writeFileSync('c:/antigravity3/data.js', fileContent, 'utf8');
console.log('Successfully written complete SEJARAH_DATA to c:/antigravity3/data.js! Total chapters: ' + chapters.length);

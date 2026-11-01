const fs = require('fs');

let combined = ['data.js', 'data-sains.js', 'data-matematik.js', 'data-kimia.js', 'data-fizik.js']
  .map(f => fs.readFileSync('c:/antigravity3/' + f, 'utf8').replace(/const\s+([A-Z_]+_DATA)\s*=/g, 'global.$1 ='))
  .join('\n;\n');
eval(combined);

console.log('=== MASTERACADEMIQ.AI PLATFORM SUMMARY (5 SUBJEK) ===');
console.log('1. SEJARAH:   ', global.SEJARAH_DATA.length, 'Bab');
console.log('2. SAINS:     ', global.SAINS_DATA.length, 'Bab');
console.log('3. MATEMATIK: ', global.MATEMATIK_DATA.length, 'Bab');
console.log('4. KIMIA:     ', global.KIMIA_DATA.length, 'Bab');
console.log('5. FIZIK:     ', global.FIZIK_DATA.length, 'Bab');

let totalChapters = global.SEJARAH_DATA.length + global.SAINS_DATA.length + global.MATEMATIK_DATA.length + global.KIMIA_DATA.length + global.FIZIK_DATA.length;
let totalQuizzes = 0;
let totalStruktur = 0;
let totalKeypoints = 0;
let totalSteps = 0;

[global.SEJARAH_DATA, global.SAINS_DATA, global.MATEMATIK_DATA, global.KIMIA_DATA, global.FIZIK_DATA].forEach(sub => {
  sub.forEach(b => {
    if (b.questions) totalQuizzes += b.questions.length;
    if (b.struktur) totalStruktur += b.struktur.length;
    if (b.keypoints) totalKeypoints += b.keypoints.length;
    if (b.steps) totalSteps += b.steps.length;
  });
});

console.log('\n--- TOTAL PLATFORM COUNTS ---');
console.log('Total Chapters:                  ', totalChapters);
console.log('Total MCQs (Kertas 1):           ', totalQuizzes);
console.log('Total Soalan Struktur (Kertas 2):', totalStruktur);
console.log('Total Keypoints & Flashcards:    ', totalKeypoints);
console.log('Total Step-by-Step Guides:       ', totalSteps);

console.log('\n--- FIZIK TINGKATAN 4 CHAPTER DETAILS ---');
global.FIZIK_DATA.forEach(bab => {
  console.log(`[${bab.id}] ${bab.babNum}: ${bab.title}`);
  console.log(`  Subtopik: ${bab.notes.length} | Langkah: ${bab.steps.length} | Keypoints: ${bab.keypoints.length} | Kuiz: ${bab.questions.length} | Struktur: ${bab.struktur.length}`);
});

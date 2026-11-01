const fs = require('fs');

let content = fs.readFileSync('c:/antigravity3/data-biologi.js', 'utf8');
let match = content.match(/const\s+BIOLOGI_DATA\s*=/);
let code = content.replace(match[0], 'global.BIOLOGI_DATA =');
eval(code);

console.log('Total BIOLOGI_DATA chapters:', global.BIOLOGI_DATA.length);

let errors = [];
global.BIOLOGI_DATA.forEach((bab, idx) => {
  if (!bab.id) errors.push(`Bab ${idx}: missing id`);
  if (!bab.babNum) errors.push(`Bab ${idx}: missing babNum`);
  if (!bab.title) errors.push(`Bab ${idx}: missing title`);
  if (!bab.synopsis) errors.push(`Bab ${idx}: missing synopsis`);
  if (!bab.notes || !Array.isArray(bab.notes) || bab.notes.length === 0) {
    errors.push(`Bab ${idx}: missing or empty notes`);
  }
  if (!bab.steps || !Array.isArray(bab.steps) || bab.steps.length === 0) {
    errors.push(`Bab ${idx}: missing or empty steps`);
  }
  if (!bab.keypoints || !Array.isArray(bab.keypoints) || bab.keypoints.length === 0) {
    errors.push(`Bab ${idx}: missing or empty keypoints`);
  }
  if (!bab.questions || !Array.isArray(bab.questions) || bab.questions.length === 0) {
    errors.push(`Bab ${idx}: missing or empty questions`);
  }
  if (!bab.struktur || !Array.isArray(bab.struktur) || bab.struktur.length === 0) {
    errors.push(`Bab ${idx}: missing or empty struktur`);
  }
});

console.log('Errors found:', errors);

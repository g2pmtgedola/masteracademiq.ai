const fs = require('fs');

const html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

const requiredIds = [
  'subject-selection-portal',
  'switch-icon-indicator',
  'active-subject-label',
  'hero-subject-name',
  'hero-subject-subtitle',
  'hero-char-img',
  'hero-fallback-emoji',
  'hero-fallback-caption',
  'chapter-select',
  'chapter-pills-list',
  'keypoints-container',
  'topic-quiz-container',
  'comprehensive-exam-container',
  'flashcard-front',
  'flashcard-back',
  'xp-display'
];

let missing = [];
requiredIds.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    missing.push(id);
  }
});

console.log('Missing DOM IDs:', missing);

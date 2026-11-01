const fs = require('fs');
const html = fs.readFileSync('c:/antigravity3/index.html', 'utf8');

const actualIds = [
  'subject-selection-portal',
  'switch-icon-indicator',
  'active-subject-label',
  'hero-subject-span',
  'hero-main-subtitle',
  'hero-character-img',
  'fallback-emoji',
  'fallback-caption',
  'floating-symbols-container',
  'mini-book-stack',
  'ribbon-eyebrow',
  'ribbon-title',
  'guide-step-1-p',
  'view-nota-desc',
  'chapter-select',
  'keypoints-container',
  'topic-quiz-container',
  'comprehensive-exam-container'
];

let missing = [];
actualIds.forEach(id => {
  if (!html.includes('id="' + id + '"')) {
    missing.push(id);
  }
});

console.log('Real Missing IDs:', missing);

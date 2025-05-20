// validate-country-emojis.js
// Run with: node validate-country-emojis.js path/to/country-phone-codes.json

const fs = require('fs');
const path = require('path');

function getFlagEmoji(code) {
  if (!code || code.length !== 2) return '';
  return code.toUpperCase().replace(/./g, c =>
    String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65)
  );
}

const [,, inputFile] = process.argv;

if (!inputFile) {
  console.error('Usage: node validate-country-emojis.js path/to/country-phone-codes.json');
  process.exit(1);
}

try {
  const inputPath = path.resolve(inputFile);
  const raw = fs.readFileSync(inputPath, 'utf8');
  const countries = JSON.parse(raw);

  const mismatches = countries.filter(c => {
    const expected = getFlagEmoji(c.code);
    return expected !== c.emoji;
  });

  if (mismatches.length === 0) {
    console.log('✅ All flag emojis match generated output!');
  } else {
    console.log(`❌ Found ${mismatches.length} mismatches:`);
    mismatches.forEach(c => {
      console.log(`${c.code} – expected ${getFlagEmoji(c.code)} but got ${c.emoji}`);
    });
  }
} catch (err) {
  console.error('❌ Error validating country emojis:', err.message);
}

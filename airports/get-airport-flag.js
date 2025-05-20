// get-airport-flag.js
// Run with: node get-airport-flag.js input.json output.json

const fs = require('fs');
const path = require('path');

function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '';
  return countryCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65));
}

const [,, inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
  console.error('Usage: node get-airport-flag.js input.json output.json');
  process.exit(1);
}

try {
  const inputPath = path.resolve(inputFile);
  const outputPath = path.resolve(outputFile);

  const raw = fs.readFileSync(inputPath, 'utf8');
  const airports = JSON.parse(raw);

  const enriched = airports.map(a => ({
    ...a,
    flag: getFlagEmoji(a.country)
  }));

  fs.writeFileSync(outputPath, JSON.stringify(enriched, null, 2));
  console.log(`✅ Added flags to ${enriched.length} airports in ${outputFile}`);
} catch (err) {
  console.error('❌ Error enriching airport data:', err.message);
}

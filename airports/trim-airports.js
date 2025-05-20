// trim-airports.js
// Run with: node trim-airports.js input.json output.json

const fs = require('fs');
const path = require('path');

const [,, inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
  console.error('Usage: node trim-airports.js input.json output.json');
  process.exit(1);
}

try {
  const inputPath = path.resolve(inputFile);
  const outputPath = path.resolve(outputFile);

  const raw = fs.readFileSync(inputPath, 'utf8');
  const airports = JSON.parse(raw);

  const trimmed = airports.filter(a =>
    ['large_airport', 'medium_airport'].includes(a.type) &&
    a.scheduled_service === 'yes' &&
    a.iata_code
  );

  const simplified = trimmed.map(a => ({
    code: a.iata_code,
    name: a.name,
    city: a.municipality,
    country: a.iso_country
  }));

  fs.writeFileSync(outputPath, JSON.stringify(simplified, null, 2));
  console.log(`✅ Saved ${simplified.length} airports to ${outputFile}`);
} catch (err) {
  console.error('❌ Error processing file:', err.message);
}

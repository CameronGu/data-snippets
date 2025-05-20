/**
 * Convert a 2-letter country code to its corresponding flag emoji.
 * 
 * @param countryCode ISO 3166-1 alpha-2 country code (e.g., 'US', 'FR')
 * @returns Emoji flag string (e.g., '🇺🇸') or empty string if invalid
 */
export function getFlagEmoji(countryCode: string): string {
  if (!countryCode || countryCode.length !== 2) return '';
  return countryCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65)
    );
}

/**
 * Merge two arrays of objects based on a shared key.
 *
 * @param primary The main array (objects will be augmented)
 * @param secondary The array with additional fields
 * @param key The property name to match on (must exist in both arrays)
 * @returns A new array with merged objects (primary takes precedence)
 */
export function mergeByKey<T extends Record<string, any>, U extends Record<string, any>>(
  primary: T[],
  secondary: U[],
  key: keyof T & keyof U
): (T & Partial<U>)[] {
  const map = new Map(secondary.map(item => [item[key], item]));
  return primary.map(item => ({
    ...map.get(item[key]),
    ...item
  }));
}

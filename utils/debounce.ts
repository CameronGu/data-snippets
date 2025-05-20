/**
 * Debounce a function — it will only run after the specified delay
 * has passed without being called again.
 *
 * @param fn The function to debounce
 * @param delay Delay in milliseconds
 * @returns A debounced version of the function
 */
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout | undefined;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

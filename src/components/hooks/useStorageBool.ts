import { useEffect, useState } from 'react';

const PREFIX = 'dou-day-2026:';

// Boolean toggle persisted in localStorage. Survives reload so an attendee
// can re-open the deck the day after the talk and see what they already
// ticked off.
export function useStorageBool(key: string) {
  const fullKey = PREFIX + key;
  const [v, setV] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return window.localStorage.getItem(fullKey) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (v) window.localStorage.setItem(fullKey, '1');
      else window.localStorage.removeItem(fullKey);
    } catch {
      /* private mode / quota — ignore */
    }
  }, [fullKey, v]);

  return [v, setV] as const;
}

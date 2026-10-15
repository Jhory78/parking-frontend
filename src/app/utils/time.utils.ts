/** `95` → `1 h 35 min`, `12` → `12 min`. */
export function formatMinutes(minutes: number | null | undefined): string {
  if (minutes == null || minutes < 0) return '';
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest} min`;
  return rest ? `${hours} h ${rest} min` : `${hours} h`;
}

/** Minutos completos desde `isoTime` hasta `now`. */
export function minutesSince(isoTime: string | null | undefined, now: number = Date.now()): number | null {
  if (!isoTime) return null;
  return Math.max(0, Math.floor((now - new Date(isoTime).getTime()) / 60000));
}

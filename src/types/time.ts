export type TimeOfDay = 'early morning' | 'morning' | 'afternoon' | 'evening' | 'night' | 'today';

export interface TimeRanges {
  earlyMorning?: { start: number; end: number };
  morning?: { start: number; end: number };
  afternoon?: { start: number; end: number };
  evening?: { start: number; end: number };
  night?: { start: number; end: number };
}

export const DEFAULT_TIME_RANGES: Required<TimeRanges> = {
  earlyMorning: { start: 0, end: 5 },
  morning: { start: 6, end: 11 },
  afternoon: { start: 12, end: 17 },
  evening: { start: 18, end: 19 },
  night: { start: 20, end: 23 }
};

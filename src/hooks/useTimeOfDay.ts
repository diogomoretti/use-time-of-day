import { useState } from 'react';
import { TimeOfDay, TimeRanges, DEFAULT_TIME_RANGES } from '../types/time';

export const getTimeOfDay = (hour: number, ranges: Required<TimeRanges> = DEFAULT_TIME_RANGES): TimeOfDay => {
  if (hour >= ranges.earlyMorning.start && hour <= ranges.earlyMorning.end) return 'early morning';
  if (hour >= ranges.morning.start && hour <= ranges.morning.end) return 'morning';
  if (hour >= ranges.afternoon.start && hour <= ranges.afternoon.end) return 'afternoon';
  if (hour >= ranges.evening.start && hour <= ranges.evening.end) return 'evening';
  if (hour >= ranges.night.start && hour <= ranges.night.end) return 'night';
  return 'today';
};

export default function useTimeOfDay(customRanges?: TimeRanges): TimeOfDay {
  const [timeOfDay, _] = useState<TimeOfDay>(() => {
    const hour = new Date().getHours();
    const ranges = { ...DEFAULT_TIME_RANGES, ...customRanges };
    return getTimeOfDay(hour, ranges);
  });

  return timeOfDay;
};
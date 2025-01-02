import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import useTimeOfDay, { getTimeOfDay } from './useTimeOfDay';
import { TimeRanges } from '../types/time';

const customRanges: Required<TimeRanges> = {
  earlyMorning: { start: 0, end: 5 },
  morning: { start: 6, end: 11 },
  afternoon: { start: 12, end: 17 },
  evening: { start: 18, end: 20 },
  night: { start: 21, end: 23 },
};

describe('getTimeOfDay', () => {
  it('should return early morning for hours between 0 and 5 with default ranges', () => {
    expect(getTimeOfDay(0)).toBe('early morning');
    expect(getTimeOfDay(3)).toBe('early morning');
    expect(getTimeOfDay(5)).toBe('early morning');
  });

  it('should return morning for hours between 6 and 12 with default ranges', () => {
    expect(getTimeOfDay(6)).toBe('morning');
    expect(getTimeOfDay(9)).toBe('morning');
    expect(getTimeOfDay(11)).toBe('morning');
  });

  it('should return afternoon for hours between 12 and 18 with default ranges', () => {
    expect(getTimeOfDay(12)).toBe('afternoon');
    expect(getTimeOfDay(15)).toBe('afternoon');
    expect(getTimeOfDay(17)).toBe('afternoon');
  });

  it('should return evening for hours between 18 and 19 with default ranges', () => {
    expect(getTimeOfDay(18)).toBe('evening');
    expect(getTimeOfDay(19)).toBe('evening');
  });

  it('should return night for hours between 20 and 23 with default ranges', () => {
    expect(getTimeOfDay(20)).toBe('night');
    expect(getTimeOfDay(23)).toBe('night');
  });

  it('works with custom ranges', () => {
    expect(getTimeOfDay(5, customRanges)).toBe('early morning');
    expect(getTimeOfDay(10, customRanges)).toBe('morning');
    expect(getTimeOfDay(15, customRanges)).toBe('afternoon');
    expect(getTimeOfDay(18, customRanges)).toBe('evening');
    expect(getTimeOfDay(23, customRanges)).toBe('night');
  });
});

describe('useTimeOfDay', () => {
  it('should return afternoon when it is 14:00 with custom ranges', () => {
    const mockDate = new Date('2024-01-01T14:00:00');
    vi.setSystemTime(mockDate);

    const { result } = renderHook(() => useTimeOfDay());
    expect(result.current).toBe('afternoon');

    vi.useRealTimers();
  });

  it('should return evening when it is 18:00 with custom ranges', () => {
    const mockDate = new Date('2024-01-01T18:00:00');
    vi.setSystemTime(mockDate);

    const { result } = renderHook(() => useTimeOfDay(customRanges));
    expect(result.current).toBe('evening');

    vi.useRealTimers();
  });
});
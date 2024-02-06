const MINUTES_IN_HOUR = 60;

const timeComparisonCriteria = (time: string) => {
  const [hourA, minuteA] = time.split(':').map(Number);
  const minutes = minuteA + hourA * MINUTES_IN_HOUR;

  return minutes;
};

export default timeComparisonCriteria;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe('timeComparisonCriteria', () => {
    it('should return minutes as a number', () => {
      expect(timeComparisonCriteria('10:00')).toBe(10 * MINUTES_IN_HOUR);
      expect(timeComparisonCriteria('8:23')).toBe(8 * MINUTES_IN_HOUR + 23);
      expect(timeComparisonCriteria('0:00')).toBe(0);
    });
    it('should return NaN when incorrect time is given', () => {
      expect(timeComparisonCriteria('-:23')).toBe(NaN);
    });
  });
}

const MINUTES_IN_HOUR = 60;

const timeComparisonCriteria = (time: string) => {
  const [hourA, minuteA] = time.split(':').map(Number);
  const minutes = minuteA + hourA * MINUTES_IN_HOUR;

  return minutes;
};

export default timeComparisonCriteria;

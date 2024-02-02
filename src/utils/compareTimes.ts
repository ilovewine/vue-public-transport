export default (timeA: string, timeB: string): number => {
  const [hoursA, minutesA] = timeA.split(':').map(Number);
  const [hoursB, minutesB] = timeB.split(':').map(Number);

  if (hoursA !== hoursB) {
    return hoursA < hoursB ? -1 : 1;
  }
  if (minutesA !== minutesB) {
    return minutesA < minutesB ? -1 : 1;
  }
  return 0;
};

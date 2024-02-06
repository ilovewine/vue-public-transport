const clearPx = (str: string) => +str.replace('px', '');

export default clearPx;

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest;
  it('should successfully replace pixel value to number', () => {
    expect(clearPx('100px')).toBe(100);
  });
  it('should replace string to number even without `px` included', () => {
    expect(clearPx('120')).toBe(120);
  });
}

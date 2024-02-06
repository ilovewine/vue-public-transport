const removeDuplicates = <T extends unknown[]>(array: T): T =>
  [...new Set(array)] as T;

export default removeDuplicates;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe('removeDuplicates', () => {
    it('should remove number & string duplicates', () => {
      expect(removeDuplicates([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
      expect(removeDuplicates(['a', 'b', 'a', 'b', 'c'])).toEqual([
        'a',
        'b',
        'c',
      ]);
    });
  });
}

const debounce = (callback: Function, delay: number) => {
  setTimeout(() => {
    callback();
  }, delay);
};

export default debounce;

if (import.meta.vitest) {
  const { describe, it, expect, vi } = import.meta.vitest;
  describe('debounce', () => {
    it('should debounce the callback', () => {
      const callback = vi.fn();
      debounce(callback, 100);
      expect(callback).toBeCalledTimes(0);
      setTimeout(() => {
        expect(callback).toBeCalledTimes(1);
      }, 200);
    });
  });
}

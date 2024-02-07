import storeState from '@/store/state';
import { afterEach, beforeEach, vi } from 'vitest';
import { Context } from '..';

export default (testCases: (context: Context) => void) => {
  const commit = vi.fn();
  let state = { ...storeState };

  let context = {
    commit,
    state,
  } as unknown as Context;

  beforeEach(() => {
    state = { ...storeState };
    context = {
      commit,
      state,
    } as unknown as Context;
  });

  afterEach(() => {
    commit.mockReset();
  });

  testCases(context);
};

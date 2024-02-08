import storeState, { StoreState } from '@/store/state';
import { afterEach, beforeEach, vi } from 'vitest';

export interface MockActionContext {
  state: StoreState;
  commit: ReturnType<typeof vi.fn>;
  dispatch: ReturnType<typeof vi.fn>;
}

export default (testCases: (context: MockActionContext) => void) => {
  const commit = vi.fn();
  const dispatch = vi.fn();
  let state = { ...storeState };

  let context = { state, commit, dispatch };

  beforeEach(() => {
    state = { ...storeState };
    context = { state, commit, dispatch };
  });

  afterEach(() => {
    commit.mockReset();
    dispatch.mockReset();
  });

  testCases(context);
};

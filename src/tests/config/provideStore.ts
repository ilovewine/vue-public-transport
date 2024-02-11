import { key } from '@/store';
import { StoreState } from '@/store/state';
import { vi } from 'vitest';

export default (state: Partial<StoreState>) => {
  const useStore = () => ({
    state,
    commit: vi.fn(),
    dispatch: vi.fn(),
  });

  return {
    global: {
      provide: {
        [key as symbol]: useStore(),
      },
    },
  };
};

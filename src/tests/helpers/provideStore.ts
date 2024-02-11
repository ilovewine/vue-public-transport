import { key } from '@/store';
import { StoreState } from '@/store/state';
import { vi } from 'vitest';

const useStore = (state: Partial<StoreState>) => ({
  state,
  commit: vi.fn(),
  dispatch: vi.fn(),
});

export default (state: Partial<StoreState>) => {
  const store = useStore(state);

  return {
    setup: {
      global: {
        provide: {
          [key as symbol]: store,
        },
      },
    },
    store,
  };
};

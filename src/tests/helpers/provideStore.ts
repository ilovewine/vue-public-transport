import { key } from '@/store';
import getters, { GETTER } from '@/store/getters';
import storeState, { StoreState } from '@/store/state';
import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';
import { vi } from 'vitest';

const useStore = (state?: Partial<StoreState>) => {
  const joinedState = { ...storeState, ...state };
  return {
    state: joinedState,
    commit: vi.fn(),
    dispatch: vi.fn(),
    getters: Object.assign(
      {},
      ...Object.keys(getters).map((key) => ({ [key]: vi.fn() }))
    ),
  };
};

export default (state?: Partial<StoreState>) => {
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

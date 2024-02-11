import { StoreState } from '@/store/state';
import { key } from '@/store';
import { Store } from 'vuex';

export default (store: Store<Partial<StoreState>>) => {
  return {
    global: {
      provide: {
        [key as symbol]: store,
      },
    },
  };
};

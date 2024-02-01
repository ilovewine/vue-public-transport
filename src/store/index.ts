import { createStore, Store, useStore as useBaseStore } from 'vuex';
import { InjectionKey } from 'vue';
import mutations from './mutations';
import actions from './actions';
import state, { StoreState } from './state';
import getters from './getters';

export const key: InjectionKey<Store<StoreState>> = Symbol();

export const store = createStore<StoreState>({
  state,
  getters,
  mutations,
  actions,
});

const useStore = () => useBaseStore(key);

export default useStore;

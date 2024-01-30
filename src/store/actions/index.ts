import { Commit, Dispatch } from 'vuex';
import initializeData from './initializeData';
import { StoreState } from '../state';

export const enum ACTION {
  INITIALIZE_DATA = 'INITIALIZE_DATA',
}

export interface ActionContext {
  commit: Commit;
  dispatch: Dispatch;
  state: StoreState;
}

export default {
  [ACTION.INITIALIZE_DATA]: initializeData,
};

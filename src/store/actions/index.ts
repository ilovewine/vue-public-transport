import { ActionContext, Commit, Dispatch } from 'vuex';
import initializeData from './initializeData';
import { StoreState } from '../state';

export const enum ACTION {
  INITIALIZE_DATA = 'INITIALIZE_DATA',
}

export type Context = ActionContext<StoreState, StoreState>;

export default {
  [ACTION.INITIALIZE_DATA]: initializeData,
};

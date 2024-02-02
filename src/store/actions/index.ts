import { ActionContext, Commit, Dispatch } from 'vuex';
import initializeData from './initializeData';
import { StoreState } from '../state';
import selectLine from './selectLine';

export const enum ACTION {
  INITIALIZE_DATA = 'INITIALIZE_DATA',
  SELECT_LINE = 'SELECT_LINE',
}

export type Context = ActionContext<StoreState, StoreState>;

export default {
  [ACTION.INITIALIZE_DATA]: initializeData,
  [ACTION.SELECT_LINE]: selectLine,
};

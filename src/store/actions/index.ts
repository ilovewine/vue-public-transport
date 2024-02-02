import { ActionContext } from 'vuex';
import initializeData from './initializeData';
import { StoreState } from '../state';
import selectLine from './selectLine';
import filterStops from './filterStops';
import resetFilteredStops from './resetFilteredStops';

export type Context = ActionContext<StoreState, StoreState>;

export const enum ACTION {
  INITIALIZE_DATA = 'INITIALIZE_DATA',
  SELECT_LINE = 'SELECT_LINE',
  FILTER_STOPS = 'FILTER_STOPS',
  RESET_FILTERED_STOPS = 'RESET_FILTERED_STOPS',
}

export default {
  [ACTION.INITIALIZE_DATA]: initializeData,
  [ACTION.SELECT_LINE]: selectLine,
  [ACTION.FILTER_STOPS]: filterStops,
  [ACTION.RESET_FILTERED_STOPS]: resetFilteredStops,
};

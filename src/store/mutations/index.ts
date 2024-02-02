import selectLine from './setCurrentLine';
import selectStop from './setCurrentStop';
import setBusLines from './setBusLines';
import setBusStops from './setBusStops';
import setFilteredStops from './setFilteredStops';

export const enum MUTATION {
  SET_BUS_LINES = 'SET_BUS_LINES',
  SET_BUS_STOPS = 'SET_BUS_STOPS',
  SET_CURRENT_LINE = 'SET_CURRENT_LINE',
  SET_CURRENT_STOP = 'SET_CURRENT_STOP',
  SET_FILTERED_STOPS = 'SET_FILTERED_STOPS',
}

export default {
  [MUTATION.SET_BUS_LINES]: setBusLines,
  [MUTATION.SET_BUS_STOPS]: setBusStops,
  [MUTATION.SET_CURRENT_LINE]: selectLine,
  [MUTATION.SET_CURRENT_STOP]: selectStop,
  [MUTATION.SET_FILTERED_STOPS]: setFilteredStops,
};

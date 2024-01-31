import selectLine from './selectLine';
import selectStop from './selectStop';
import setBusLines from './setBusLines';
import setBusStops from './setBusStops';

export const enum MUTATION {
  SET_BUS_LINES = 'SET_BUS_LINES',
  SET_BUS_STOPS = 'SET_BUS_STOPS',
  SELECT_LINE = 'SELECT_LINE',
  SELECT_STOP = 'SELECT_STOP',
}

export default {
  [MUTATION.SET_BUS_LINES]: setBusLines,
  [MUTATION.SET_BUS_STOPS]: setBusStops,
  [MUTATION.SELECT_LINE]: selectLine,
  [MUTATION.SELECT_STOP]: selectStop,
};

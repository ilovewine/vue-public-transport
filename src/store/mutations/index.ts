import setBusLines from './setBusLines';
import setBusStops from './setBusStops';

export const enum MUTATION {
  SET_BUS_LINES = 'SET_BUS_LINES',
  SET_BUS_STOPS = 'SET_BUS_STOPS',
}

export default {
  [MUTATION.SET_BUS_LINES]: setBusLines,
  [MUTATION.SET_BUS_STOPS]: setBusStops,
};

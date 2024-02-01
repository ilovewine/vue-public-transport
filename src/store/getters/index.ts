import isLineSelected from './isLineSelected';
import isStopSelected from './isStopSelected';

export const enum GETTER {
  IS_LINE_SELECTED = 'IS_LINE_SELECTED',
  IS_STOP_SELECTED = 'IS_STOP_SELECTED',
}

export default {
  [GETTER.IS_LINE_SELECTED]: isLineSelected,
  [GETTER.IS_STOP_SELECTED]: isStopSelected,
};

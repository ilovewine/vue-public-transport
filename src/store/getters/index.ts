import isLineSelected from './isLineSelected';

export const enum GETTER {
  IS_LINE_SELECTED = 'IS_LINE_SELECTED',
}

export default {
  [GETTER.IS_LINE_SELECTED]: isLineSelected,
};

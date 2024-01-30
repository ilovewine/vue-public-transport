import initializeData from './initializeData';

export const enum ACTION {
  INITIALIZE_DATA = 'INITIALIZE_DATA',
}

export default {
  [ACTION.INITIALIZE_DATA]: initializeData,
};

import { BusLineModel } from '@/types/BusLineModel';
import { StoreState } from '../state';

export default (state: StoreState, line: BusLineModel) => {
  state.selectedLine = line;
};

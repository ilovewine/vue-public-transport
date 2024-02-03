import { BusLineModel } from '@/types/BusLine';
import { StoreState } from '../state';

export default (state: StoreState, line: BusLineModel) => {
  state.selectedLine = line;
};

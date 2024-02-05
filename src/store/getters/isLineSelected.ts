import { BusLineModel } from '@/types/BusLineModel';
import { StoreState } from '../state';

export default (state: StoreState) =>
  (lineData: BusLineModel): boolean =>
    state.selectedLine.line === lineData.line;

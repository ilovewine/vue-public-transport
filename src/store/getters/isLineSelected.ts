import { BusLineModel } from '@/types/BusLine';
import { StoreState } from '../state';

export default (state: StoreState) =>
  (lineData: BusLineModel): boolean =>
    state.selectedLine?.line === lineData.line;

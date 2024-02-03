import { BusLineModel } from '@/types/BusLine';
import { StoreState } from '../state';

export default (state: StoreState, lines: BusLineModel[]) =>
  (state.lines = lines);

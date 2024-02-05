import { BusLineModel } from '@/types/BusLineModel';
import { StoreState } from '../state';

export default (state: StoreState, lines: BusLineModel[]) =>
  (state.lines.list = lines);

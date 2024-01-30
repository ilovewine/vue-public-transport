import { BusLineModel } from '@/model/BusLine';
import { StoreState } from '../state';

export default (state: StoreState, lines: BusLineModel) =>
  (state.lines = lines);

import { BusLineModel } from '@/types/BusLineModel';
import { StoreState } from '../state';
import Sortable from '@/class/sort';

export default (state: StoreState, lines: Sortable<BusLineModel>) =>
  (state.lines = lines);

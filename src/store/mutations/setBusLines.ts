import { BusLineModel } from '@/types/BusLineModel';
import { StoreState } from '../state';
import Sortable from '@/class/Sortable';

export default (state: StoreState, lines: Sortable<BusLineModel>) =>
  (state.lines = lines);

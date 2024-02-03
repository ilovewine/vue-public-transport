import { BusLineStopModel } from '@/types/BusStop';
import { StoreState } from '../state';

export default (state: StoreState, stop: BusLineStopModel) =>
  (state.selectedStop = stop);

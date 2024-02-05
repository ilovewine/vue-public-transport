import { BusStopModel } from '@/types/BusStopModel';
import { StoreState } from '../state';

export default (state: StoreState, stop: BusStopModel) =>
  (state.selectedStop = stop);

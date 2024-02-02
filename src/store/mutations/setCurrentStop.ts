import { BusLineStopModel } from '@/model/BusStop';
import { StoreState } from '../state';

export default (state: StoreState, stop: BusLineStopModel) =>
  (state.selectedStop = stop);

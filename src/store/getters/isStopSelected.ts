import { BusStopModel } from '@/types/BusStopModel';
import { StoreState } from '../state';

export default (state: StoreState) =>
  (stopData: BusStopModel): boolean =>
    state.selectedStop?.stop === stopData.stop;

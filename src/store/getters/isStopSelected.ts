import { BusLineStopModel } from '@/types/BusStop';
import { StoreState } from '../state';

export default (state: StoreState) =>
  (stopData: BusLineStopModel): boolean =>
    state.selectedStop?.stop === stopData.stop;

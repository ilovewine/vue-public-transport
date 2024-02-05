import { BusStopModel } from './BusStopModel';
import { Sortable } from './sort';

export interface BusLineModel {
  line: number;
  stops: Sortable<BusStopModel>;
}

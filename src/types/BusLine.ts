import { BusLineStopModel } from './BusStop';

export interface BusLineModel {
  line: number;
  stops: BusLineStopModel[];
}

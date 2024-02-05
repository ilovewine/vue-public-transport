import Sortable from '@/class/sort';
import { BusStopModel } from './BusStopModel';

export interface BusLineModel {
  line: number;
  stops: Sortable<BusStopModel>;
}

import Sortable from '@/class/Sortable';
import { BusStopModel } from './BusStopModel';

export interface BusLineModel {
  line: number;
  stops: Sortable<BusStopModel>;
}

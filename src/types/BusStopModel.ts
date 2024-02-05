import { Sortable } from './sort';

export interface BusStopModel {
  stop: string;
  order: number;
  timetable: Sortable<string>;
}

import Sortable from '@/class/sort';

export interface BusStopModel {
  stop: string;
  order: number;
  timetable: Sortable<string>;
}

import Sortable from '@/class/Sortable';

export interface BusStopModel {
  stop: string;
  order: number;
  timetable: Sortable<string>;
}

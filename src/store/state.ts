import Sortable from '@/class/Sortable';
import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';

export const EMPTY_LINE: BusLineModel = {
  line: 0,
  stops: new Sortable(),
};

export const EMPTY_STOP: BusStopModel = {
  stop: '',
  order: 0,
  timetable: new Sortable(),
};

export interface StoreState {
  stops: Sortable<string>;
  filteredStops: Sortable<string>;
  lines: Sortable<BusLineModel>;
  selectedLine: BusLineModel;
  selectedStop: BusStopModel;
}

const state: StoreState = {
  stops: new Sortable(),
  filteredStops: new Sortable(),
  lines: new Sortable(),
  selectedLine: EMPTY_LINE,
  selectedStop: EMPTY_STOP,
};

export default state;

import Sortable from '@/class/sort';
import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';

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
  selectedLine: {
    line: 0,
    stops: new Sortable(),
  },
  selectedStop: {
    stop: '',
    order: 0,
    timetable: new Sortable(),
  },
};

export default state;

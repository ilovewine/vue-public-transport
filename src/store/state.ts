import { BusLineModel } from '@/model/BusLine';
import { BusLineStopModel } from '@/model/BusStop';

export interface StoreState {
  stops: string[];
  filteredStops: string[];
  lines: BusLineModel[];
  selectedLine: BusLineModel | null;
  selectedStop: BusLineStopModel | null;
}

const state: StoreState = {
  stops: [],
  filteredStops: [],
  lines: [],
  selectedLine: null,
  selectedStop: null,
};

export default state;

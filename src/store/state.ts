import { BusLineModel } from '@/types/BusLine';
import { BusLineStopModel } from '@/types/BusStop';

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

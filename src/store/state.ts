import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';
import { Sortable } from '@/types/sort';

interface NonNullableStoreState {
  stops: Sortable<string>;
  filteredStops: Sortable<string>;
  lines: Sortable<BusLineModel>;
  selectedLine: BusLineModel;
  selectedStop: BusStopModel;
}

export interface StoreState extends NullableProperties<NonNullableStoreState> {}

const state: StoreState = {
  stops: null,
  filteredStops: null,
  lines: null,
  selectedLine: null,
  selectedStop: null,
};

export default state;

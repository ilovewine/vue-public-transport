import { BusLineModel } from '@/model/BusLine';

export interface StoreState {
  stops: string[];
  lines: BusLineModel;
}

const state: StoreState = {
  stops: [],
  lines: [],
};

export default state;

import { StoreState } from '../state';

export default (state: StoreState, stops: string[]) =>
  (state.filteredStops.list = stops);

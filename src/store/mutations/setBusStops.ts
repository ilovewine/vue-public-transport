import Sortable from '@/class/sort';
import { StoreState } from '../state';

export default (state: StoreState, stops: Sortable<string>) =>
  (state.stops = stops);

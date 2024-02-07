import Sortable from '@/class/Sortable';
import { StoreState } from '../state';

export default (state: StoreState, stops: Sortable<string>) =>
  (state.stops = stops);

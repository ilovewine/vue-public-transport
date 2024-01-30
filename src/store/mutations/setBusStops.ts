import { StoreState } from '../state';

export default (state: StoreState, stops: string[]) => (state.stops = stops);

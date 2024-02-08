import Sortable from '@/class/Sortable';
import { Context } from '.';
import { MUTATION } from '../mutations';

export default (context: Context) => {
  const stops = new Sortable(
    context.state.stops.list,
    context.state.stops.criteria
  );
  stops.sort();

  context.commit(MUTATION.SET_FILTERED_STOPS, stops);
};

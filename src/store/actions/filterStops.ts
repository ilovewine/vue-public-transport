import Sortable from '@/class/Sortable';
import { Context } from '.';
import { MUTATION } from '../mutations';

export default (context: Context, filteringCriteria: string) => {
  const filteredList = filteringCriteria.length
    ? context.state.stops.list.filter((stop: string) =>
        stop.toLocaleLowerCase().includes(filteringCriteria.toLocaleLowerCase())
      )
    : context.state.stops.list;
  const filteredStops = new Sortable(
    filteredList,
    context.state.filteredStops.criteria
  );

  filteredStops.sort();

  context.commit(MUTATION.SET_FILTERED_STOPS, filteredStops);
};

import { Context } from '.';
import { MUTATION } from '../mutations';

export default (context: Context, filteringCriteria: string) =>
  context.commit(
    MUTATION.SET_FILTERED_STOPS,
    filteringCriteria.length
      ? context.state.stops.list.filter((stop: string) =>
          stop
            .toLocaleLowerCase()
            .includes(filteringCriteria.toLocaleLowerCase())
        )
      : context.state.stops
  );

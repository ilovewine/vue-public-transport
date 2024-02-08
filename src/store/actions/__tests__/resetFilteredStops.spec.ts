import { describe, it, expect } from 'vitest';
import withContext from './withContext';
import actions, { ACTION, Context } from '..';
import Sortable from '@/class/Sortable';
import { MUTATION } from '@/store/mutations';

describe('resetFilteredStops', () => {
  const resetFilteredStops = actions[ACTION.RESET_FILTERED_STOPS];

  const stops = new Sortable(['stop1', 'stop3', 'stop2']);

  withContext((context) => {
    it('should call commit with SET_FILTERED_STOPS mutation and set sorted stops', () => {
      context.state.stops = stops;

      const sortedStops = new Sortable(stops.list);
      sortedStops.sort();

      resetFilteredStops(context as unknown as Context);

      expect(context.commit).toHaveBeenCalledOnce();

      const commitArgs = context.commit.mock.lastCall as NonNullable<
        [MUTATION, Sortable<string>]
      >;

      expect(commitArgs[0]).toStrictEqual(MUTATION.SET_FILTERED_STOPS);
      expect(commitArgs[1].list).toStrictEqual(sortedStops.list);
    });
  });
});

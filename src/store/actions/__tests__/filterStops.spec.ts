import { describe, it, expect } from 'vitest';
import actions, { ACTION, Context } from '..';
import Sortable from '@/class/Sortable';
import { MUTATION } from '@/store/mutations';
import withContext, { MockActionContext } from './withContext';

describe('filterStops', () => {
  const filterStops = actions[ACTION.FILTER_STOPS];
  const stops = new Sortable([
    'stop 1',
    'filter stop 3',
    'stop 2',
    'filter stop 2',
    'stop 3',
    'filter stop 1',
  ]);
  const filteringCriteria = 'filter';

  withContext((context) => {
    it('should call commit with SET_FILTERED_STOPS mutation and provide sorted entries', () => {
      context.state.stops = stops;

      const filteredStops = new Sortable([
        'filter stop 1',
        'filter stop 2',
        'filter stop 3',
      ]);

      filterStops(context as unknown as Context, filteringCriteria);

      expect(context.commit).toHaveBeenCalledOnce();
      expect(context.commit).toHaveBeenCalledWith(
        MUTATION.SET_FILTERED_STOPS,
        filteredStops
      );
    });
  });
});

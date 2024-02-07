import { describe, it, expect } from 'vitest';
import actions, { ACTION } from '..';
import Sortable from '@/class/Sortable';
import { MUTATION } from '@/store/mutations';
import testAction from './testAction';

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

  testAction((context) => {
    it('should call commit with SET_FILTERED_STOPS mutation and provide sorted entries', () => {
      context.state.stops = stops;

      const filteredStops = new Sortable([
        'filter stop 1',
        'filter stop 2',
        'filter stop 3',
      ]);

      filterStops(context, filteringCriteria);

      expect(context.commit).toHaveBeenCalledTimes(1);
      expect(context.commit).toHaveBeenCalledWith(
        MUTATION.SET_FILTERED_STOPS,
        filteredStops
      );
    });
  });
});

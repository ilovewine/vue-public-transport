import { describe, it, expect } from 'vitest';
import actions, { ACTION, Context } from '..';
import withContext from '@/tests/helpers/actionWithContext';
import { BusLineModel } from '@/types/BusLineModel';
import Sortable from '@/class/Sortable';
import { MUTATION } from '@/store/mutations';
import { EMPTY_STOP } from '@/store/state';

describe('selectLine', () => {
  const selectLine = actions[ACTION.SELECT_LINE];

  withContext((context) => {
    it('should set current line and reset current stop', () => {
      const line: BusLineModel = {
        line: 1,
        stops: new Sortable(),
      };

      selectLine(context as unknown as Context, line);

      expect(context.commit).toHaveBeenCalledTimes(2);
      expect(context.commit).toHaveBeenNthCalledWith(
        1,
        MUTATION.SET_CURRENT_LINE,
        line
      );
      expect(context.commit).toHaveBeenNthCalledWith(
        2,
        MUTATION.SET_CURRENT_STOP,
        EMPTY_STOP
      );
    });
  });
});

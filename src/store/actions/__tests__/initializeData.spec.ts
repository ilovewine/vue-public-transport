import { describe, it, expect, vi, afterEach } from 'vitest';
import withContext from '@/tests/helpers/actionWithContext';
import actions, { ACTION, Context } from '..';
import mockServerResponse from '@/tests/fixtures/serverResponse';
import retrieveStops from '../utils/retrieveStops';
import retrieveLines from '../utils/retrieveLines';
import { MUTATION } from '@/store/mutations';
import { BusLineModel } from '@/types/BusLineModel';
import Sortable from '@/class/Sortable';

const getLineList = (lines: Sortable<BusLineModel>) =>
  lines.list.map((line) => line.line);

describe('initializeData', () => {

  const initializeData = actions[ACTION.INITIALIZE_DATA];

  const stops = retrieveStops(mockServerResponse);
  const lines = retrieveLines(mockServerResponse);

  vi.doMock('/data.json', () => ({stops: mockServerResponse}))

  vi.doMock('../utils/retrieveLines.ts', () => ({
    default: () => lines,
  }));

  vi.doMock('../utils/retrieveStops.ts', () => ({
    default: () => stops,
  }));

  withContext((context) => {
    it('should call necessary commits and actions', async () => {
      await initializeData(context as unknown as Context);

      expect(context.commit).toHaveBeenCalledTimes(2);
      expect(context.dispatch).toHaveBeenCalledOnce();

      expect(context.commit).toHaveBeenNthCalledWith(
        1,
        MUTATION.SET_BUS_STOPS,
        stops
      );

      const busLinesArgument = context.commit.mock.calls[1][1];
      expect(getLineList(busLinesArgument)).toStrictEqual(getLineList(lines));

      expect(context.dispatch).toHaveBeenCalledWith(
        ACTION.RESET_FILTERED_STOPS
      );
    });
  });
});

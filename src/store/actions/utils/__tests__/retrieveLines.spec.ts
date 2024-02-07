import { describe, it, expect, assertType } from 'vitest';
import retrieveLines from '../retrieveLines';
import mockServerResponse from './mock/serverResponse';
import Sortable from '@/class/sort';
import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';

describe('retrieveLines', () => {
  it('should return a Sortable with no duplicates', () => {
    const result = retrieveLines(mockServerResponse);

    expect(result.list).toHaveLength(3);

    const extractedLines = result.list.map((line) => line.line);
    expect(extractedLines).toStrictEqual([0, 1, 2]);

    expect(result).toBeInstanceOf(Sortable);

    result.list.forEach((line) => {
      const stops = line.stops.list;
      expect(stops).toHaveLength(5);

      const stopNames = stops.map((stop) => stop.stop);
      expect(stopNames).toStrictEqual([
        'stop 1',
        'stop 2',
        'stop 3',
        'stop 4',
        'stop 5',
      ]);

      stops.forEach((stop) => {
        expect(stop.timetable).toBeInstanceOf(Sortable);
        assertType<Sortable<string>>(stop.timetable);
      });

      expect(line.stops).toBeInstanceOf(Sortable);
      assertType<Sortable<BusStopModel>>(line.stops);
    });

    assertType<Sortable<BusLineModel>>(result);
  });
});

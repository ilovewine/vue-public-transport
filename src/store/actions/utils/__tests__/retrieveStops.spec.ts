import { ServerResponseModel } from '@/types/response';
import { assertType, describe, expect, it } from 'vitest';
import retrieveStops from '../retrieveStops';
import Sortable from '@/class/sort';
import mockServerResponse from './mock/serverResponse';

describe('retrieveStops', () => {
  it('should return an empty Sortable when response is empty', () => {
    const response: ServerResponseModel = [];
    const result = retrieveStops(response);
    expect(result.list).toEqual([]);
    expect(result).toBeInstanceOf(Sortable);
    assertType<Sortable<string>>(result);
  });

  it('should return a stop Sortable object with no duplicates', () => {
    const result = retrieveStops(mockServerResponse);
    expect(result.list).toStrictEqual(
      [...Array(5).keys()].map((index) => `stop ${index + 1}`)
    );
    assertType<Sortable<string>>(result);
  });

  it('should return a stop Sortable object with a new stop', () => {
    const newStopName = 'New Stop';
    const resultWithNewStop = retrieveStops([
      { line: 20, stop: newStopName, order: 1, time: '0:00' },
      ...mockServerResponse,
    ]);

    const expectedResult = [
      newStopName,
      [...Array(5).keys()].map((index) => `stop ${index + 1}`),
    ]
      .flat()
      .sort();

    expect(resultWithNewStop.list).toStrictEqual(expectedResult);
    assertType<Sortable<string>>(resultWithNewStop);
  });
});

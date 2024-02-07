import { describe, it, assertType, expect, beforeEach } from 'vitest';
import getters, { GETTER } from '..';
import storeState, { StoreState } from '@/store/state';
import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';
import Sortable from '@/class/Sortable';

describe('getters', () => {
  let state: StoreState;

  beforeEach(() => {
    state = { ...storeState };
  });

  it('isLineSelected', () => {
    const isLineSelected = getters[GETTER.IS_LINE_SELECTED];

    const currentLineData: BusLineModel = {
      line: 3,
      stops: new Sortable(),
    };

    const anotherLineData: BusLineModel = {
      line: 4,
      stops: new Sortable(),
    };

    state.selectedLine = currentLineData;

    expect(isLineSelected(state)(currentLineData)).toStrictEqual(true);

    expect(isLineSelected(state)(anotherLineData)).toStrictEqual(false);

    assertType<(state: StoreState) => (lineData: BusLineModel) => boolean>(
      isLineSelected
    );
  });

  it('isStopSelected', () => {
    const isStopSelected = getters[GETTER.IS_STOP_SELECTED];

    const currentStopData: BusStopModel = {
      stop: 'Stop 0',
      order: 0,
      timetable: new Sortable(['10:00', '11:00', '12:00']),
    };

    const anotherStopData = {
      stop: 'Stop 1',
      order: 1,
      timetable: new Sortable(['10:00', '11:00', '12:00']),
    };

    state.selectedStop = currentStopData;

    expect(isStopSelected(state)(currentStopData)).toStrictEqual(true);

    expect(isStopSelected(state)(anotherStopData)).toStrictEqual(false);

    assertType<(state: StoreState) => (stopDAta: BusStopModel) => boolean>(
      isStopSelected
    );
  });
});

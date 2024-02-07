import { BusLineModel } from '@/types/BusLineModel';
import { describe, it, expect, beforeEach, assertType } from 'vitest';
import Sortable from '@/class/sort';
import storeState, { StoreState } from '@/store/state';
import { BusStopModel } from '@/types/BusStopModel';
import mutations, { MUTATION } from '..';

const lines: BusLineModel[] = [...Array(3).keys()].map((index) => ({
  line: index,
  stops: new Sortable(),
}));

const sortableLines = new Sortable(lines);

const stops = [...Array(5).keys()].map((index) => `Stop ${index}`);

const sortableStops = new Sortable(stops);

const stop: BusStopModel = {
  stop: 'Stop 0',
  order: 0,
  timetable: new Sortable(['10:00', '11:00', '12:00']),
};

describe('mutations', () => {
  let state: StoreState;

  beforeEach(() => {
    state = { ...storeState };
  });

  it('setBusLines', () => {
    const setBusLines = mutations[MUTATION.SET_BUS_LINES];
    setBusLines(state, sortableLines);
    expect(state.lines).toStrictEqual(sortableLines);
    assertType<Sortable<BusLineModel>>(state.lines);
  });

  it('setBusStops', () => {
    const setBusStops = mutations[MUTATION.SET_BUS_STOPS];
    setBusStops(state, sortableStops);
    expect(state.stops).toStrictEqual(sortableStops);
    assertType<Sortable<string>>(state.stops);
  });

  it('setCurrentLine', () => {
    const setCurrentLine = mutations[MUTATION.SET_CURRENT_LINE];
    setCurrentLine(state, lines[0]);
    expect(state.selectedLine).toStrictEqual(lines[0]);
    assertType<BusLineModel>(state.selectedLine);
  });

  it('setCurrentStop', () => {
    const setCurrentStop = mutations[MUTATION.SET_CURRENT_STOP];
    setCurrentStop(state, stop);
    expect(state.selectedStop).toStrictEqual(stop);
    assertType<BusStopModel>(state.selectedStop);
  });

  it('setFilteredStops', () => {
    const setFilteredStops = mutations[MUTATION.SET_FILTERED_STOPS];
    setFilteredStops(state, sortableStops);
    expect(state.filteredStops).toStrictEqual(sortableStops);
    assertType<Sortable<string>>(state.filteredStops);
  });
});

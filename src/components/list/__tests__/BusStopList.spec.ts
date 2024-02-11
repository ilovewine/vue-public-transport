import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import BusStopList from '../BusStopList.vue';
import provideStore from '@/tests/helpers/provideStore';
import state from '@/store/state';
import { BusLineModel } from '@/types/BusLineModel';
import Sortable from '@/class/Sortable';
import getDataSelector from '@/tests/getDataSelector';
import { MUTATION } from '@/store/mutations';
import { stops } from '@/tests/fixtures/testData';

let mockedStops = stops();
let selectedLine: BusLineModel = {
  line: 1,
  stops: mockedStops,
};

describe.concurrent('BusStopList', () => {
  it('should display a list of stops', () => {
    const wrapper = mount(BusStopList, {
      ...provideStore({ ...state, selectedLine }).setup,
    });

    const text = wrapper.text();

    expect(text).toContain('Bus Line: 1');

    mockedStops.list.forEach((stop) => {
      expect(text).toContain(stop.stop);
    });
  });

  it('should change the sort order when `changeOrder` is called', () => {
    let wrapper = mount(BusStopList, {
      ...provideStore({ ...state, selectedLine }).setup,
    });

    let list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${index}`);
    });

    const sortIcon = wrapper.find(getDataSelector('sort-icon'));

    sortIcon.trigger('click');

    wrapper = mount(BusStopList, {
      ...provideStore({ ...state, selectedLine }).setup,
    });
    list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${list.length - 1 - index}`);
    });

    // since we're running tests concurrently, we need to change back the order to its initial state
    sortIcon.trigger('click');
  });

  it('should trigger the store mutation when `selectStop` is called', () => {
    const { store, setup: storeSetup } = provideStore({
      ...state,
      selectedLine,
    });
    const wrapper = mount(BusStopList, {
      ...storeSetup,
    });

    const firstStop = wrapper.find(getDataSelector('bus-list-item'));

    firstStop.trigger('click');

    expect(store.commit).toHaveBeenCalledOnce();
    const mutationName = store.commit.mock.lastCall[0];
    const stopName = store.commit.mock.lastCall[1].stop;
    expect(mutationName).toBe(MUTATION.SET_CURRENT_STOP);
    expect(stopName).toBe(selectedLine.stops.list[0].stop);
  });
});

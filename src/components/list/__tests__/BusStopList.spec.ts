import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusStopList from '../BusStopList.vue';
import provideStore from '@/tests/helpers/provideStore';
import { BusLineModel } from '@/types/BusLineModel';
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
      ...provideStore({ selectedLine }).setup,
    });

    const text = wrapper.text();

    expect(text).toContain('Bus Line: 1');

    mockedStops.list.forEach((stop) => {
      expect(text).toContain(stop.stop);
    });
  });

  it('should change the sort order when `changeOrder` is called', async () => {
    let wrapper = mount(BusStopList, {
      ...provideStore({ selectedLine }).setup,
    });

    let list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${index}`);
    });

    const sortIcon = wrapper.find(getDataSelector('sort-icon'));

    await sortIcon.trigger('click');

    wrapper = mount(BusStopList, {
      ...provideStore({ selectedLine }).setup,
    });
    list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${list.length - 1 - index}`);
    });
  });

  it('should trigger the store mutation when `selectStop` is called', async () => {
    const { store, setup } = provideStore({
      selectedLine,
    });
    const wrapper = mount(BusStopList, {
      ...setup,
    });

    const firstStop = wrapper.find(getDataSelector('bus-list-item'));

    await firstStop.trigger('click');

    expect(store.commit).toHaveBeenCalledOnce();
    const mutationName = store.commit.mock.lastCall[0];
    const stopName = store.commit.mock.lastCall[1].stop;
    expect(mutationName).toBe(MUTATION.SET_CURRENT_STOP);
    expect(stopName).toBe(selectedLine.stops.list[0].stop);
  });
});

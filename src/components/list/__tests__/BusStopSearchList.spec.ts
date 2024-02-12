import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusStopSearchList from '../BusStopSearchList.vue';
import provideStore from '@/tests/helpers/provideStore';
import { stringStops } from '@/tests/fixtures/testData';
import Sortable from '@/class/Sortable';
import getDataSelector from '@/tests/getDataSelector';

const mockedStops = stringStops();

describe.concurrent('BusStopSearchList', () => {
  it('should display a list of all filtered stops', () => {
    const filteredStops = new Sortable(
      mockedStops.list.filter((stop) => stop.includes('stop 2'))
    );
    const wrapper = mount(BusStopSearchList, {
      ...provideStore({ stops: mockedStops, filteredStops }).setup,
    });

    const items = wrapper.findAll(getDataSelector('bus-list-item'));
    expect(items).toHaveLength(1);
    expect(items[0].text()).toContain('stop 2');
  });

  it('should not react to list item click events', async () => {
    const filteredStops = new Sortable(
      mockedStops.list.filter((stop) => stop.includes('stop 2'))
    );
    const { store, setup } = provideStore({
      stops: mockedStops,
      filteredStops,
    });
    const wrapper = mount(BusStopSearchList, {
      ...setup,
    });

    const item = wrapper.find(getDataSelector('bus-list-item'));
    await item.trigger('click');

    expect(store.commit).not.toHaveBeenCalled();
  });

  it('should sort items after clicking the sort icon', async () => {
    const { setup } = provideStore({
      stops: mockedStops,
      filteredStops: mockedStops,
    });
    let wrapper = mount(BusStopSearchList, {
      ...setup,
    });
    let list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${index}`);
    });

    const sortIcon = wrapper.find(getDataSelector('sort-icon'));
    await sortIcon.trigger('click');

    wrapper = mount(BusStopSearchList, {
      ...setup,
    });
    list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${list.length - 1 - index}`);
    });
  });
});

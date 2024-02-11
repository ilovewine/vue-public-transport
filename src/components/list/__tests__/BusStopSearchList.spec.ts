import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusStopSearchList from '../BusStopSearchList.vue';
import provideStore from '@/tests/helpers/provideStore';
import state from '@/store/state';
import { stringStops } from '@/tests/fixtures/testData';
import Sortable from '@/class/Sortable';
import getDataSelector from '@/tests/getDataSelector';

const mockedStops = stringStops();

describe.concurrent('BusStopSearchList', () => {
  it('should display a list of all filtered stops', () => {
    const filteredStops = new Sortable(
      mockedStops.list.filter((stop) => stop.includes('stop 2'))
    );
    const storeState = { ...state, stops: mockedStops, filteredStops };
    const wrapper = mount(BusStopSearchList, {
      ...provideStore(storeState).setup,
    });

    const items = wrapper.findAll(getDataSelector('bus-list-item'));
    expect(items).toHaveLength(1);
    expect(items[0].text()).toContain('stop 2');
  });

  it('should not react to list item click events', () => {
    const filteredStops = new Sortable(
      mockedStops.list.filter((stop) => stop.includes('stop 2'))
    );
    const storeState = { ...state, stops: mockedStops, filteredStops };
    const { store, setup } = provideStore(storeState);
    const wrapper = mount(BusStopSearchList, {
      ...setup,
    });

    const item = wrapper.find(getDataSelector('bus-list-item'));
    item.trigger('click');

    expect(store.commit).not.toHaveBeenCalled();
  });

  it('should sort items after clicking the sort icon', () => {
    const storeState = {
      ...state,
      stops: mockedStops,
      filteredStops: mockedStops,
    };
    const { setup } = provideStore(storeState);
    let wrapper = mount(BusStopSearchList, {
      ...setup,
    });
    let list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${index}`);
    });

    const sortIcon = wrapper.find(getDataSelector('sort-icon'));
    sortIcon.trigger('click');

    wrapper = mount(BusStopSearchList, {
      ...setup,
    });
    list = wrapper.findAll(getDataSelector('bus-list-item'));

    list.forEach((item, index) => {
      expect(item.text()).toBe(`stop ${list.length - 1 - index}`);
    });

    // since we're running tests concurrently, we need to change back the order to its initial state
    sortIcon.trigger('click');
  });
});

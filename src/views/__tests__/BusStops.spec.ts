import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BusStops from '../BusStops.vue';
import getDataSelector from '@/tests/getDataSelector';
import provideStore from '@/tests/helpers/provideStore';
import { stringStops } from '@/tests/fixtures/testData';
import { ACTION } from '@/store/actions';

vi.mock('@/utils/debounce', () => ({
  default: vi.fn((cb) => cb()),
}));

describe.concurrent('BusStops', () => {
  it('should display bus search & search list components', () => {
    const { setup } = provideStore();
    const wrapper = shallowMount(BusStops, {
      ...setup,
    });
    const busSearch = wrapper.find(getDataSelector('bus-search'));
    const busStopSearchList = wrapper.find(
      getDataSelector('bus-stop-search-list')
    );

    expect(busSearch.exists()).toBeTruthy();
    expect(busStopSearchList.exists()).toBeTruthy();
  });

  it('should filter items after typing input to search', async () => {
    const partialState = {
      stops: stringStops(),
      filteredStops: stringStops(),
    };
    const { store, setup } = provideStore(partialState);
    const wrapper = mount(BusStops, {
      ...setup,
    });

    const busSearch = wrapper.find(getDataSelector('bus-search'));
    const input = busSearch.find(getDataSelector('input'));
    await input.setValue('stop 1');

    expect(store.dispatch).toHaveBeenCalledOnce();
    expect(store.dispatch).toHaveBeenCalledWith(ACTION.FILTER_STOPS, 'stop 1');
  });

  it('should reset the filtering when unmounting the view', () => {
    const { store, setup } = provideStore();
    let wrapper = mount(BusStops, {
      ...setup,
    });

    wrapper.unmount();

    expect(store.dispatch).toHaveBeenCalledOnce();
    expect(store.dispatch).toHaveBeenLastCalledWith(
      ACTION.RESET_FILTERED_STOPS
    );
  });
});

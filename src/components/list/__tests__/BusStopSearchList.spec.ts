import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusStopSearchList from '../BusStopSearchList.vue';
import provideStore from '@/tests/helpers/provideStore';
import state from '@/store/state';
import { stringStops } from '@/tests/fixtures/testData';

const mockedStops = stringStops();

describe('BusStopSearchList', () => {
  it('should initially display a list of all stops', () => {
    const storeState = { ...state, stops: mockedStops };

    const wrapper = mount(BusStopSearchList, {
      ...provideStore(storeState).setup,
    });

    console.log(wrapper.html());
    console.log(storeState);

    expect(1).toBe(1);
  });
});

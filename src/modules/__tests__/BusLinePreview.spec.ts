import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BusLinePreview from '../BusLinePreview.vue';
import getDataSelector from '@/tests/getDataSelector';

describe('BusLinePreview', () => {
  it('should show bus stop list & time list components', () => {
    const wrapper = shallowMount(BusLinePreview);
    const busStopList = wrapper.find(getDataSelector('bus-stop-list'));
    const busTimeList = wrapper.find(getDataSelector('bus-time-list'));

    expect(busStopList.exists()).toBeTruthy();
    expect(busTimeList.exists()).toBeTruthy();
  });
});

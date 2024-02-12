import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BusLines from '../BusLines.vue';
import getDataSelector from '@/tests/getDataSelector';

describe('BusLines', () => {
  it('should display bus line picker & preview modules', () => {
    const wrapper = shallowMount(BusLines);
    const busLinePicker = wrapper.find(getDataSelector('bus-line-picker'));
    const busLinePreview = wrapper.find(getDataSelector('bus-line-preview'));

    expect(busLinePicker.exists()).toBeTruthy();
    expect(busLinePreview.exists()).toBeTruthy();
  });
});

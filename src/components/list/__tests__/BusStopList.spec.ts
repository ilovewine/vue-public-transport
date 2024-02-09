import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusStopList from '../BusStopList.vue';

describe.todo('BusStopList', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusStopList);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

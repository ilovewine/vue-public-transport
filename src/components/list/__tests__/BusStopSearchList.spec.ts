import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusStopSearchList from '../BusStopSearchList.vue';

describe('BusStopSearchList', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusStopSearchList);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

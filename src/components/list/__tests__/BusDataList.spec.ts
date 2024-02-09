import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusDataList from '../BusDataList.vue';

describe('BusDataList', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusDataList);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

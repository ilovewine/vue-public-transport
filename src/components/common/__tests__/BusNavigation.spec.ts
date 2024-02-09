import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusNavigation from '../BusNavigation.vue';

describe.todo('BusNavigation', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusNavigation);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

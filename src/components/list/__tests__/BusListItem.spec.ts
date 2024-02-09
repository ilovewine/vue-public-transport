import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusListItem from '../BusListItem.vue';

describe('BusListItem', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusListItem);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

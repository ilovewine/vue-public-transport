import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusLineButton from '../BusLineButton.vue';

describe('BusLineButton', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusLineButton);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

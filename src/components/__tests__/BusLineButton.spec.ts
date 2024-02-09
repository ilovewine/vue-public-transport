import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusLineButton from '../BusLineButton.vue';

describe('BusLineButton', () => {
  it('should display a button with a given number and `active` class when set to active', async () => {
    const wrapper = mount(BusLineButton, {
      props: {
        number: 1,
      },
    });

    expect(wrapper.text()).toBe('1');
    expect(wrapper.classes()).not.toContain('active');

    await wrapper.setProps({
      active: true,
    });

    expect(wrapper.classes()).toContain('active');
  });
});

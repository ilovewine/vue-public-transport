import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusSearch from '../BusSearch.vue';

describe.todo('BusSearch', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusSearch);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

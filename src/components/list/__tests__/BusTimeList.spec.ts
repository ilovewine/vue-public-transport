import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusTimeList from '../BusTimeList.vue';

describe.todo('BusTimeList', () => {
  it('should provide a list of router-links', () => {
    const wrapper = mount(BusTimeList);

    console.log(wrapper);

    expect(1).toBe(1);
  });
});

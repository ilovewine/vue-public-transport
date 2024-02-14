import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BusStopListHeader from '../elements/BusStopListHeader.vue';
import getDataSelector from '@/tests/getDataSelector';

describe('BusStopListHeader', () => {
  it('should emit the sort event when a sort icon is clicked', async () => {
    const wrapper = mount(BusStopListHeader);

    const sortIcon = wrapper.find(getDataSelector('sort-icon'));
    await sortIcon.trigger('click');

    expect(wrapper.emitted('sort')).toHaveLength(1);
  });
});

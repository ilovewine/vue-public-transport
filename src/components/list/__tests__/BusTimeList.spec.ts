import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusTimeList from '../BusTimeList.vue';
import provideStore from '@/tests/helpers/provideStore';
import { BusStopModel } from '@/types/BusStopModel';
import { stops } from '@/tests/fixtures/testData';
import getDataSelector from '@/tests/getDataSelector';

describe('BusTimeList', () => {
  it('should display a non-interactive time list', async () => {
    const selectedStop: BusStopModel = stops().list[0];
    const { store, setup } = provideStore({ selectedStop });
    const wrapper = mount(BusTimeList, {
      ...setup,
    });

    expect(wrapper.text()).toContain(`Bus Stop: ${selectedStop.stop}`);

    const items = wrapper.findAll(getDataSelector('bus-list-item'));
    expect(items).toHaveLength(3);

    const item = items[0];
    await item.trigger('click');

    expect(store.commit).not.toHaveBeenCalled();
  });
});

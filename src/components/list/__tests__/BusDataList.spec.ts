import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusDataList from '../BusDataList.vue';
import state from '@/store/state';
import Sortable from '@/class/Sortable';
import { createStore } from 'vuex';
import provideStore from '@/tests/config/provideStore';
import getDataSelector from '@/tests/getDataSelector';

const headerSlotContent = 'Header Slot Test';
const defaultSlotContent = 'Default Slot Test';

const store = createStore({
  state,
});

describe.concurrent('BusDataList', () => {
  it('should pass slots to specific elements', () => {
    const wrapper = mount(BusDataList, {
      ...provideStore(store),
      props: {
        sortable: new Sortable([1, 2, 3]),
        isReady: true,
      },
      slots: {
        header: headerSlotContent,
        default: defaultSlotContent,
      },
    });

    const header = wrapper.find(getDataSelector('header'));
    const items = wrapper.findAll(getDataSelector('list-group-item'));

    expect(header.text()).toContain(headerSlotContent);
    expect(items).toHaveLength(3);
    items.forEach((item) => {
      expect(item.text()).toBe(defaultSlotContent);
    });
  });

  it.todo('should display a placeholder when no list is provided', () => {});
});

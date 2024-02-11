import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusDataList from '../BusDataList.vue';
import state from '@/store/state';
import Sortable from '@/class/Sortable';
import provideStore from '@/tests/config/provideStore';
import getDataSelector from '@/tests/getDataSelector';

const headerSlotContent = 'Header Slot Test';
const defaultSlotContent = 'Default Slot Test';

describe.concurrent('BusDataList', () => {
  it('should pass slots to specific elements', () => {
    const wrapper = mount(BusDataList, {
      ...provideStore(state),
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

  it('should display a placeholder to select a bus line when no list is provided', () => {
    const storeState = { ...state };

    const wrapper = mount(BusDataList, {
      ...provideStore(storeState),
      props: {
        sortable: null,
        isReady: false,
      },
      slots: {
        header: headerSlotContent,
        default: defaultSlotContent,
      },
    });

    const placeholder = wrapper.find(getDataSelector('placeholder'));

    expect(placeholder.text()).toContain('Please select the bus line first');
  });

  it('should display a placeholder to select a bus stop when no list is provided', () => {
    const wrapper = mount(BusDataList, {
      ...provideStore({
        ...state,
        selectedLine: {
          line: 1,
          stops: new Sortable([
            { stop: 'test', order: 0, timetable: new Sortable() },
          ]),
        },
      }),
      props: {
        sortable: null,
        isReady: false,
      },
      slots: {
        header: headerSlotContent,
        default: defaultSlotContent,
      },
    });

    const placeholder = wrapper.find(getDataSelector('placeholder'));

    expect(placeholder.text()).toContain('Please select the bus stop first');
  });
});

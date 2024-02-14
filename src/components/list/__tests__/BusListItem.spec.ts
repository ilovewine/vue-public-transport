import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusListItem from '../elements/BusListItem.vue';
import getDataSelector from '@/tests/getDataSelector';

const label = 'test label';

describe.concurrent('BusListItem', () => {
  it('should render the `span` tag when `interactive` is false', () => {
    const wrapper = mount(BusListItem, {
      props: {
        interactive: false,
        label,
      },
    });

    const component = wrapper.find(getDataSelector('list-item'));

    expect(component.text()).toContain(label);
    expect(component.html()).toContain('span');
  });

  it('should render the `a` tag when `interactive` is true', () => {
    const wrapper = mount(BusListItem, {
      props: {
        interactive: true,
        label,
      },
    });

    const component = wrapper.find(getDataSelector('list-item'));

    expect(component.html()).toContain('a');
  });

  it('should add `active` class when set via props', () => {
    const wrapper = mount(BusListItem, {
      props: {
        active: true,
        label,
      },
    });

    const component = wrapper.find(getDataSelector('list-item'));

    expect(component.classes()).toContain('active');
  });
});

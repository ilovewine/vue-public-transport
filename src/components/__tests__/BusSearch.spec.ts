import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BusSearch from '../BusSearch.vue';
import getDataSelector from '@/tests/getDataSelector';

describe('BusSearch', () => {
  it('should correctly pass input to v-model', async () => {
    const wrapper = mount(BusSearch, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    const inputWrapper = await wrapper.get(getDataSelector('input'));
    const inputElement = inputWrapper.element as HTMLInputElement;
    expect(inputElement.value).toBe('');

    await inputWrapper.setValue('test');

    expect(inputElement.value).toBe('test');
    expect(wrapper.props('modelValue')).toBe('test');
  });
});

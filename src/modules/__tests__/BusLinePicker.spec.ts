import { describe, it, expect } from 'vitest';
import BusLinePicker from '../BusLinePicker.vue';
import { mount } from '@vue/test-utils';
import provideStore from '@/tests/helpers/provideStore';
import { EMPTY_LINE } from '@/store/state';
import getDataSelector from '@/tests/getDataSelector';
import { lines } from '@/tests/fixtures/testData';
import { ACTION } from '@/store/actions';
import { GETTER } from '@/store/getters';

describe.concurrent('BusLinePicker', () => {
  it('should provide an empty list when no data is passed', () => {
    const { setup } = provideStore();
    const wrapper = mount(BusLinePicker, {
      ...setup,
    });

    const buttons = wrapper.find(getDataSelector('bus-line-button'));

    expect(buttons.exists()).toBeFalsy();
  });

  it("should provide a list of bus lines' buttons", () => {
    const { setup } = provideStore({ lines: lines() });
    const wrapper = mount(BusLinePicker, {
      ...setup,
    });

    const buttons = wrapper.findAll(getDataSelector('bus-line-button'));

    expect(buttons).toHaveLength(3);
    buttons.forEach((button, index) =>
      expect(button.text()).toContain(index + 1)
    );
  });

  it('should select the bus line', async () => {
    const { store, setup } = provideStore({ lines: lines() });
    const wrapper = mount(BusLinePicker, {
      ...setup,
    });

    const buttons = wrapper.findAll(getDataSelector('bus-line-button'));
    await buttons[0].trigger('click');

    expect(store.dispatch).toHaveBeenCalledOnce();
    const [firstActionName, firstPayload] = store.dispatch.mock.lastCall;
    expect(firstActionName).toBe(ACTION.SELECT_LINE);
    expect(firstPayload.line).toBe(1);

    await buttons[1].trigger('click');

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    const [secondActionName, secondPayload] = store.dispatch.mock.lastCall;
    expect(secondActionName).toBe(ACTION.SELECT_LINE);
    expect(secondPayload.line).toBe(2);

    store.getters[GETTER.IS_LINE_SELECTED].mockReturnValue(true);
    await buttons[1].trigger('click');

    expect(store.dispatch).toHaveBeenCalledTimes(3);

    const [lastActionName, lastPayload] = store.dispatch.mock.lastCall;
    expect(lastActionName).toBe(ACTION.SELECT_LINE);
    expect(lastPayload).toStrictEqual(EMPTY_LINE);
  });
});

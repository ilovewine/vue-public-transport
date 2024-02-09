import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import BusNavigation from '../BusNavigation.vue';
import { RouteRecordRaw } from 'vue-router';

const mockRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    redirect: '/route1',
  },
  {
    name: 'route1',
    path: '/route1',
    component: () => {},
  },
  {
    name: 'route2',
    path: '/route2',
    component: () => {},
  },
];

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ path: '/route1' })),
  useRouter: vi.fn(() => ({
    push: () => {},
    getRoutes: () => mockRoutes,
  })),
}));

describe('BusNavigation', () => {
  it('should provide a working list of router-links', () => {
    const wrapper = mount(BusNavigation, {
      global: {
        stubs: ['router-link'],
      },
    });

    expect(wrapper.findAll('.router-link')).toHaveLength(2);
    expect(wrapper.find('[to="/"]').exists()).toBeFalsy();
    expect(wrapper.find('[to="/route1"]').classes()).toContain('active');
  });
});

import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import BusNavigation from '../BusNavigation.vue';
import { RouteRecordRaw } from 'vue-router';
import { provideStubs } from '@/tests/config/provideRouter';
import getDataSelector from '@/tests/getDataSelector';

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
  useRoute: vi.fn(() => ({ path: mockRoutes[1].path })),
  useRouter: vi.fn(() => ({
    push: () => {},
    getRoutes: () => mockRoutes,
  })),
}));

describe('BusNavigation', () => {
  it('should provide a working list of router-links', () => {
    const wrapper = mount(BusNavigation, provideStubs);

    expect(wrapper.findAll(getDataSelector('router-link'))).toHaveLength(2);
    expect(wrapper.find('[to="/"]').exists()).toBeFalsy();
    expect(wrapper.find('[to="/route1"]').classes()).toContain('active');
  });
});

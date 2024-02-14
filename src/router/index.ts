import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BusLines from '@/views/BusLines.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/lines',
  },
  {
    path: '/lines',
    name: 'Bus Lines',
    component: BusLines,
  },
  {
    path: '/stops',
    name: 'Stops',
    component: () => import('@/views/BusStops.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

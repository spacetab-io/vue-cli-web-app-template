import {
  RouteConfig,
} from 'vue-router';

const router: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: async (): Promise<typeof import('*.vue')> => import('../pages/home/index.vue'),
  },
];

export default router;

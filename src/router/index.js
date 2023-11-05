import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: HOME_ROUTE_PATH,
    name: HOME_ROUTE_NAME,
    component: () => import('@/views/HomeView'),
  },
  {
    path: NOT_FOUND_ROUTE_PATH,
    name: NOT_FOUND_ROUTE_NAME,
    component: () => import('@/views/404View'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

import { createMemoryHistory, createRouter } from 'vue-router';

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  // 使用MemoryHistory可以在保持路由不变的前提下模拟路由行为，可以防止在移动端手势触发或者浏览器前进后退按钮导致的路由改变
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
  ],
});

export default router;

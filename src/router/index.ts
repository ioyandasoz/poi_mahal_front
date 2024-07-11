import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default-layout.vue'),
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('@/pages/main-page.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('@/pages/HomePage.vue')
      },
      {
        path: '/auth',
        name: 'auth',
        component: () => import('@/pages/auth-page.vue')
      },
    ]

  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import CatalogComponent from '@/views/CatalogView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CatalogComponent,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/views/ArticleView.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/adminpanel',
      component: () => import('@/views/AdminPanelView.vue')
    },
  ],
})

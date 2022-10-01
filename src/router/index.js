import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product.list',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/List.vue')
  },
  {
    path: '/product/create',
    name: 'product.create',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/Form.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/List.vue')
  },
  {
    path: '/user/create',
    name: 'user.create',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/Form.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import MovieIndex from '../views/MovieIndex.vue'
import MovieShowView from '../views/MovieShowView.vue'
import Connection from '../views/Connection.vue'
import FavoriteList from '../views/FavoriteList.vue'

import { isAuthenticated, isNotAuthenticated } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieIndex
    },
    {
      path: '/movie/:id',
      name: 'movie.show',
      component: MovieShowView
    },
    {
      path: '/connection',
      name: 'connection',
      component: Connection,
      beforeEnter: [isAuthenticated]
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteList,
      beforeEnter: [isNotAuthenticated]
    }
  ]
})

export default router

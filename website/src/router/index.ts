import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/profile-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact-view.vue')
    }
  ]
})

export default router

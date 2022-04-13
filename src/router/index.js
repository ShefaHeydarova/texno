import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../components/home.vue'
import contactView from '../components/contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 {
   path: '/',
   name : 'home',
   component : homeView
 },
 {
  path: '/contact',
  name : 'contact',
  component : contactView
}
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

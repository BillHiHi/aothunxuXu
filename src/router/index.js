import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
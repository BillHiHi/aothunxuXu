import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import HomePage from '../pages/home/HomePage.vue'
import CataloguePage from '../pages/ads/CataloguePage.vue'
import NameCardPage from '../pages/namecards/NameCardPage.vue'
import BrochurePage from '../pages/brochures/BrochurePage.vue'
import EnvelopePage from '../pages/envelope/EnvelopePage.vue'
import VoucherPage from '../pages/voucher/VoucherPage.vue'
import LaserDuaHau from '../pages/laser/laserduahau.vue'
import KhacLaser from '../pages/laser/khaclaser.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/catalogue', name: 'Catalogue', component: CataloguePage },
  { path: '/namecards', name: 'NameCards', component: NameCardPage },
  { path: '/brochures', name: 'Brochures', component: BrochurePage },
  { path: '/envelope', name: 'Envelope', component: EnvelopePage },
  { path: '/voucher', name: 'Voucher', component: VoucherPage },
  { path: '/laser', name: 'Laser', component: LaserDuaHau },
  { path: '/khaclaser', name: 'KhacLaser', component: KhacLaser }

]

const router = createRouter({ 
  history: createWebHistory(),
  routes
})

export default router
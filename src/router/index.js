import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import PortfolioDetail from '../views/PortfolioDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio-detail',
    name: 'PortfolioDetail',
    component: PortfolioDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import PortfolioDetail from '../views/PortfolioDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '',
      description: 'Webエンジニアを目指す河村智之のポートフォリオサイトです。'
    }
  },
  {
    path: '/portfolio-detail',
    name: 'PortfolioDetail',
    component: PortfolioDetail,
    meta: {
      title: ' - ポートフォリオ詳細',
      description: 'Webエンジニアを目指す河村智之のポートフォリオサイトです。ここでは私が実際に製作したポートフォリオを紹介します。'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

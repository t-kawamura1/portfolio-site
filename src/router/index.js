import  { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import PortfolioDetail from '../views/PortfolioDetail'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      desc: "Webエンジニアを目指す河村智之のポートフォリオサイトです。",
    },
  },
  {
    path: '/portfolio-detail',
    name: 'PortfolioDetail',
    component: PortfolioDetail,
    meta: {
      title: "ポートフォリオ詳細",
      desc: "Webエンジニアを目指す河村智之のポートフォリオサイトです。ここでは私のポートフォリオを紹介します。",
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  }
})

export default router

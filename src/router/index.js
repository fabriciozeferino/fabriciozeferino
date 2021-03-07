import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@/pages/HomePage.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () =>
      import(/* webpackChunkName: "resume-page" */ '@/pages/ResumePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about-page" */ '@/pages/AboutPage.vue')
  },
  {
    path: '/github-avatar',
    name: 'GitHub Avatar',
    component: () =>
      import(
        /* webpackChunkName: "github-avatar-page" */ '@/pages/projects/GithubAvatarPage.vue'
      )
  },
  {
    path: '/three-d-effects',
    name: '3D Effects',
    component: () =>
      import(
        /* webpackChunkName: "three-d-effects-page" */ '@/pages/projects/ThreeDEffectsPage.vue'
      )
  }
]

/* eslint-disable no-console */
console.log(process.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

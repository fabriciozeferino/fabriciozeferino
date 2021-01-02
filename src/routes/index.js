// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Dashboard from '../views/Dashboard.vue'
// import { auth } from '../firebase.js'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Dashboard',
//     component: Dashboard,
//     meta: {
//       requiresAuth: true
//     }
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
//   },
//   {
//     path: '/settings',
//     name: 'settings',
//     component: () => import( /* webpackChunkName: "settings" */ '../views/Settings.vue'),
//     meta: {
//       requiresAuth: true
//     }
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// // navigation guard to check for logged in users
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

//   if (requiresAuth && !auth.currentUser) {
//     next('/login')
//   } else {
//     next()
//   }
// })

// export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@/pages/HomePage.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () =>
      import(/* webpackChunkName: "resume-page" */ '@/pages/ResumePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about-page" */ '@/pages/AboutPage.vue'),
  },
  {
    path: '/github-avatar',
    name: 'GitHub Avatar',
    component: () =>
      import(/* webpackChunkName: "github-avatar-page" */ '@/pages/projects/GithubAvatarPage.vue'),
  },
  {
    path: '/three-d-effects',
    name: '3D Effects',
    component: () =>
      import(/* webpackChunkName: "three-d-effects-page" */ '@/pages/projects/ThreeDEffectsPage.vue'),
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router

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

// Vue.use(VueRouter)
// import { createWebHistory, createRouter } from 'vue-router'
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'

const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@/pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about-page" */ '@/pages/AboutPage.vue')
  }
]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

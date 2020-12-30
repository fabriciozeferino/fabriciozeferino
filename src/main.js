import Vue from 'vue'
import App from './App.vue'

import router from '@/routes/index.js'

import './assets/styles/index.css'

Vue.config.productionTip = false


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark'
  || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark')
  localStorage.theme = 'dark'
} else {
  document.querySelector('html').classList.remove('dark')
}


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

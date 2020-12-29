<template>
  <nav class="bg-white dark:bg-gray-900 shadow">
    <div class="container max-w-5xl mx-auto px-6 py-3">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
          <TheMenuTitle />

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 dark:text-gray-300 hover:text-gray-600 focus:outline-none focus:text-gray-600 border-l p-3 -my-3 -mr-6 cursor-pointer"
              aria-label="toggle menu"
              @click="drawer"
            >
              <BurgerIcon class="w-10 h-10" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="hidden md:flex items-center justify-end flex-1">
          <div class="flex flex-row items-center mx-8 -mx-4" />

          <!-- right side -->
          <div class="flex items-center mt-4 md:mt-0">
            <BaseLink
              v-for="item in menuItems"
              :key="item.path"
              :route-to="item.path"
              :label="item.label"
            />
          </div>

          <ToggleDarkMode class="border" />
        </div>
      </div>
    </div>

    <!-- background shadow -->
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="isOpen = false"
        />
      </div>
    </transition>

    <aside
      class="transform top-0 left-0 w-full xs:w-256 bg-white dark:bg-gray-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-between items-center border-b px-6 py-3 mb-8">
        <TheMenuTitle />

        <button
          type="button"
          class="text-gray-500 dark:text-gray-300  hover:text-gray-600 focus:outline-none focus:text-gray-600 border-l p-3 -my-3 -mr-6 cursor-pointer"
          aria-label="toggle menu"
          @click="drawer"
        >
          <BurgerIcon class="w-10 h-10" />
        </button>
      </div>
      <div class="flex flex-col">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          tag="div"
          class="flex justify-between items-center border-b first:border-t py-4 px-4 cursor-pointer font-semibold text-base"
          :to="item.path"
          @click.native="drawer"
        >
          <span class="text-default-header">{{ item.label }}</span>

          <ChevronRightIcon class="h-4 w-4" />
        </router-link>
      </div>
    </aside>
  </nav>
</template>

<script>

import BurgerIcon from '@/assets/icons/burger.svg'
import ChevronRightIcon from '@/assets/icons/chevron_right.svg'
import BaseLink from '@/components/BaseLink.vue'
import TheMenuTitle from '@/components/TheMenuTitle.vue'
import ToggleDarkMode from '@/components/ToggleDarkMode'

export default {
  name: 'Navbar',

  components: {BurgerIcon, ChevronRightIcon, BaseLink, TheMenuTitle, ToggleDarkMode},

  data() {
    return {
      isOpen: false,

      menuItems: [
        {label: 'Home', path: '/home'},
        {label: 'Resume', path: '/resume'},
        {label: 'About', path: '/about'},
      ],
    }
  },

  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        isOpen
          ? document.body.style.setProperty('overflow', 'hidden')
          : document.body.style.removeProperty('overflow')
      },
    },
  },

  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },

  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
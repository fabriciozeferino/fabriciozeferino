<template>
  <nav class="bg-white shadow">
    <div class="container max-w-5xl mx-auto px-6 py-3">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
          <TheMenuTitle />

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 border-l p-3 -my-3 -mr-6 cursor-pointer"
              aria-label="toggle menu"
              @click="drawer"
            >
              <BurgerIcon class="w-10 h-10" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="hidden md:flex md:items-center md:justify-between flex-1">
          <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8" />

          <!-- right side -->
          <div class="flex items-center mt-4 md:mt-0">
            <BaseLink
              route-to="/home"
              label="Home"
            />

            <BaseLink
              route-to="/resume"
              label="Resume"
            />

            <BaseLink
              route-to="/about"
              label="About"
            />
          </div>
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
      class="transform top-0 left-0 w-full xs:w-256 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-between items-center border-b px-6 py-3 mb-8">
        <TheMenuTitle />

        <button
          type="button"
          class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 border-l p-3 -my-3 -mr-6 cursor-pointer"
          aria-label="toggle menu"
          @click="drawer"
        >
          <BurgerIcon class="w-10 h-10" />
        </button>
      </div>
      <div class="flex flex-col">
        <router-link
          tag="div"
          class="flex justify-between items-center border-b border-t py-4 px-2 cursor-pointer font-semibold"
          to="/home"
          @click.native="drawer"
        >
          <span class="text-default-header">Home</span>

          <ChevronRightIcon class="h-4 w-4" />
        </router-link>

        <router-link
          tag="div"
          class="flex justify-between items-center border-b py-4 px-2 cursor-pointer font-semibold"
          to="/resume"
          @click.native="drawer"
        >
          <span class="text-default-header">Resume</span>

          <ChevronRightIcon class="h-4 w-4" />
        </router-link>

        <router-link
          tag="div"
          class="flex justify-between items-center border-b py-4 px-2 cursor-pointer font-semibold"
          to="/about"
          @click.native="drawer"
        >
          <span class="text-default-header">About</span>

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

export default {
  name: 'Navbar',

  components: {BurgerIcon, ChevronRightIcon, BaseLink, TheMenuTitle},

  data() {
    return {
      isOpen: false,
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
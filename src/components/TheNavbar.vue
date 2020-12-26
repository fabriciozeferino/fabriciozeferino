<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-6 py-3">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
          <div class="text-xl font-semibold text-gray-700">
            <a
              href="#"
              class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
            >Fabricio Zeferino</a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <BurgerIcon />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="hidden md:flex md:items-center md:justify-between flex-1">
          <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
            <BaseLink
              route-to="/home"
              label="Home"
            />

            <BaseLink
              route-to="/about"
              label="About"
            />
          </div>

          <!-- right side -->
          <div class="flex items-center mt-4 md:mt-0" />
        </div>
      </div>
    </div>
  </nav>
</template>
<!--<template>
  <nav class="flex fixed w-full bg-white shadow z-10" >

  <div class="flex-1 text-center">
       <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Fabricio Zeferino</a>
    </div>

    &lt;!&ndash;left side&ndash;&gt;
    <div class="flex items-center">
      <button
        class="h-56 w-56 flex -ml-12"
        aria-label="Open Menu"
        @click="drawer"
      >
        <span class="w-42 h-42 m-auto fill-current cursor-pointer">
          &lt;!&ndash; <Avatar v-if="isAuthenticated" /> &ndash;&gt;

          &lt;!&ndash; <BaseIcon
            icon="burger"
            height="32"
            width="32"
          /> &ndash;&gt;

        </span>

        <div class="flex md:hidden">
            <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
            </button>
        </div>
      </button>
    </div>


    &lt;!&ndash;right side&ndash;&gt;
    <div class="md:flex items-center">
        <div class="flex flex-col md:flex-row md:mx-6">

        </div>
    </div>


    &lt;!&ndash;side bar&ndash;&gt;
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
      <SubNavBar
        title="Account"
        back-button="home"
        class="mx-20"
        @back-button-clicked="drawer"
      />
      <Menu @close-side-bar="drawer" />
    </aside>
  </nav>
</template>-->

<script>
// import Menu from '@/ecommerce/js/shared/layout/Menu.vue'
// import SubNavBar from '@/ecommerce/js/shared/layout/SubNavBar'
// import Avatar from '@/ecommerce/js/components/shared/Avatar'

import BaseLink from '@/components/BaseLink'
import BurgerIcon from '@/components/img/burger.svg?inline'
export default {
  name: 'Navbar',

  // components: {Menu, SubNavBar, Avatar},
  components: {BaseLink, BurgerIcon},

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

<template>
  <nav class="flex fixed w-full bg-white shadow z-10" >

<div class="flex-1 text-center">
       <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Fabricio Zeferino</a>
    </div>




    <!--left side-->
    <div class="flex items-center">
      <button
        class="h-56 w-56 flex -ml-12"
        aria-label="Open Menu"
        @click="drawer"
      >
        <span class="w-42 h-42 m-auto fill-current cursor-pointer">
          <!-- <Avatar v-if="isAuthenticated" /> -->

          <!-- <BaseIcon
            icon="burger"
            height="32"
            width="32"
          /> -->
          
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


    <!--right side-->
    <div class="md:flex items-center">
        <div class="flex flex-col md:flex-row md:mx-6">
            <router-link class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="/home">Home</router-link>
            <router-link class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="/about">About</router-link>
        </div>
    </div>


    <!--side bar-->
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
</template>

<script>
// import Menu from '@/ecommerce/js/shared/layout/Menu.vue'
// import SubNavBar from '@/ecommerce/js/shared/layout/SubNavBar'
// import Avatar from '@/ecommerce/js/components/shared/Avatar'

export default {
  name: 'Navbar',

  // components: {Menu, SubNavBar, Avatar},

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
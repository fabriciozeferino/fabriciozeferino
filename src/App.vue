<template>
  <div class="h-screen flex flex-col">
    <TheNavbar />

    <transition
      is="div"
      name="fade"
      appear
      mode="out-in"
      class="flex-1 container mx-auto"
    >
      <router-view />
    </transition>

    <TheFooter />

    <!-- <loading :show="loading" /> -->
  </div>
</template>



<script>
import * as fb from '../firebase'
import TheFooter from '@/components/TheFooter.vue'
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'App',

  components: {TheFooter, TheNavbar},

  data() {
    return {
      users: [],
    }
  },

  mounted() {
    this.getUsers()
  },

  methods: {
    async getUsers(){
      this.users = []

      await fb.usersCollection.orderBy('first_name', 'asc')
        .onSnapshot(snapshot => snapshot.forEach(item => this.users.push(item.data())))
    },
  },
}


</script>

<style>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
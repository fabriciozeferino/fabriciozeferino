<template>
  <div class="h-screen flex flex-col bg-gray-50">
    <TheNavbar class="mb-12" />

    <transition
      is="div"
      name="fade"
      appear
      mode="out-in"
      class="flex-1 md:container w-full mx-auto"
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
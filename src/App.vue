<template>
  <div class="flex flex-col h-screen justify-between overflow-x-hidden">
    <TheNavbar class="mb-8" />

    <div class="container mb-16 mx-auto ">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>

    <TheFooter />

    <!-- <loading :show="loading" /> -->
  </div>
</template>


<script>
// import * as fb from '../firebase'
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

  /*mounted() {
    this.getUsers()
  },

  methods: {
    async getUsers() {
      this.users = []

      await fb.usersCollection.orderBy('first_name', 'asc')
        .onSnapshot(snapshot => snapshot.forEach(item => this.users.push(item.data())))
    },
  },*/
}
</script>

<style scoped>
.container {
  width: 100%;
}

@media (min-width: 375px) {
  .container {
    max-width: 100%;
  }
}

</style>
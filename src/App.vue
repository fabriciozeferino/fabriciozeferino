<template>
<div class="bg-red-100">
  <div v-for="user in users" :key="user.id">{{user.first_name}} {{user.last_name}}</div>
</div>
</template>

<script>
import * as fb from '../firebase'

export default {
  name: 'App',

  data() {
    return {
      users: []
    }
  },

  mounted() {
    this.getUsers()
  },

  methods: {
    async getUsers(){
      this.users = []
      
      await fb.usersCollection.orderBy('first_name', 'asc')
        .onSnapshot(snapshot => snapshot.forEach(item => this.users.push(item.data())));
    }
  },
};


</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

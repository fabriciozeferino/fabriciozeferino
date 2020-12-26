<template>
  <div class="flex flex-col justify-center items-center w-full max-w-4xl mb-40 mx-auto">
    <div class="mb-16 bg-white shadow-md rounded-lg bg-gray-700">
      <img
        class="h-44 mx-8 mt-8 mx-auto object-cover"
        :src="require('@/assets/images/github-octocat.png')"
        alt="Github Octocat"
      >

      <div class="p-6">
        <BaseTag label="Vue.js" />
        <h3 class="block text-gray-50 font-semibold text-2xl mt-2">
          Get your GitHub Profile image.
        </h3>


        <div class="my-8">
          <label
            class="text-white"
            for="username"
          >Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="w-full mt-2 px-4 py-2 block rounded bg-white text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
          >
          <span class="text-red-300 text-sm font-medium">{{ error }}</span>
        </div>

        <img
          v-if="username"
          class="object-cover w-80 h-80 mx-auto"
          :src="urlAvatar"
          :alt="username"
          @error="setFallbackImageUrl"
        >

        <div class="mt-4 flex justify-between items-center">
          <BaseAvatar dark />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseAvatar from '@/components/BaseAvatar'
import BaseTag from '@/components/BaseTag'

export default {
  name: 'GithubAvatarPage',

  components: {BaseAvatar, BaseTag},
  data() {
    return {
      username: null,
      error: null,
    }
  },

  computed:{
    urlAvatar(){
      const image = new Image()
      image.src = `https://github.com/${this.username}.png?size=460`
    

      // listen for `onload` event
      image.onload = () => {

        console.log(image)
        if (image.status === 200) {
          console.log('Image exists.')
        } else {
          console.log('Image does not exist.')
        }
      }

      return `https://github.com/${this.username}.png?size=460`

    },
  },
  methods: {
    setFallbackImageUrl(event) {
      this.error = 'Profile not found.'
      return event.target.src = require('@/assets/images/github-octocat.png')
    },
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden max-w-screen-sm mx-auto bg-gray-700">
    <img
      class="h-44 w-full object-cover"
      :src="require('@/assets/images/bg-01-l.jpg')"
      alt="Github Octocat"
    >

    <div class="p-6">
      <div class="mb-6">
        <BaseTag label="Vue.js" />
      </div>

      <h3 class="block text-white font-semibold text-2xl mt-2">
        Get your GitHub avatar.
      </h3>

      <div class="my-8">
        <label
          class="text-gray-200 font-medium"
          for="username"
        >User name</label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="base-input"
        >
        <span class="base-input-error">{{ error }}</span>
      </div>

      <div
        class="my-8"
        @click="showAvatar"
      >
        <label
          class="text-gray-200 font-medium"
          for="url"
        >URL</label>
        <input
          id="url"
          :value="`https://github.com/${username}.png?size=460`"
          type="text"
          class="base-input text-xs text-gray-500 hover:text-gray-400 cursor-pointer"
          disabled
        >
      </div>

      <img
        v-if="username"
        class="object-cover w-80 h-80 mx-auto"
        :src="`https://github.com/${username}.png?size=460`"
        :alt="username"
        @error="setFallbackImageUrl"
      >

      <img
        v-else
        class="object-cover w-80 h-80 mx-auto"
        src="https://github.com/github.png?size=460"
        alt="Github Octocat"
      >

      <div class="mt-8 flex justify-between items-center">
        <BaseAvatar dark />
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
      username: 'github',
      error: null,
    }
  },

  watch:{
    username(){
      this.error = null
    },
  },

  methods: {
    setFallbackImageUrl(event) {
      this.error = 'Profile not found.'
      return event.target.src = require('@/assets/images/github-octocat.jpeg')
    },

    showAvatar() {
      window.open(`https://github.com/${this.username}.png?size=460`, '_blank')
    },
  },
}
</script>

<style scoped>

</style>
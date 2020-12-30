<template>
  <div class="bg-white dark:bg-black-dark shadow-md rounded-lg overflow-hidden max-w-screen-sm mx-auto bg-gray-700">
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
          class="base-input-label"
          for="username"
        >User name</label>
        <input
          id="username"
          v-model="username"
          placeholder="User name"
          type="text"
          class="base-input"
        >
        <div class="h-0">
          <span class="base-input-error">{{ error }}</span>
        </div>
      </div>

      <div>
        <label
          class="base-input-label"
          for="url"
        >Size</label>
        <VueSlider
          id="size"
          v-model="size"
          :data="range"
        />
      </div>

      <div
        class="my-8"
        @click="showAvatar"
      >
        <label
          class="base-input-label"
          for="url"
        >URL</label>
        <input
          id="url"
          :value="`https://github.com/${username}.png?size=${size}`"
          type="text"
          class="base-input text-xs text-gray-500 dark:text-gray-300  hover:text-gray-400 cursor-pointer"
          disabled
        >
      </div>

      <img
        v-if="username"
        class="object-cover mx-auto"
        :src="`https://github.com/${username}.png?size=${size}`"
        :alt="username"
        @error="setFallbackImageUrl"
      >

      <img
        v-else
        class="object-cover w-80 h-80 mx-auto"
        :src="`https://github.com/github.png?size=${size}`"
        alt="Github Octocat"
      >

      <div class="mt-8 flex justify-between items-center">
        <BaseAvatar />
      </div>
    </div>
  </div>
</template>

<script>
import BaseAvatar from '@/components/BaseAvatar.vue'
import BaseTag from '@/components/BaseTag.vue'
import VueSlider from 'vue-slider-component'

export default {
  name: 'GithubAvatarPage',

  components: {BaseAvatar, BaseTag, VueSlider},
  data() {
    return {
      username: 'github',
      error: null,
      size: 460,
    }
  },

  computed: {
    range() {
      return Array(456).join(0).split(0)
        .map((val, i) => i + 5)
    },
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
      window.open(`https://github.com/${this.username}.png?size=${this.size}`, '_blank')
    },
  },
}
</script>

<style scoped>
/* component style */
.vue-slider-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* rail style */
.vue-slider-rail {
  background-color: #ccc;
  border-radius: 15px;
}

/* process style */
.vue-slider-process {
  background-color: #ffffff !important;
  border-radius: 15px;
}

/* mark style */
.vue-slider-mark {
  z-index: 4;
}
.vue-slider-mark:first-child .vue-slider-mark-step, .vue-slider-mark:last-child .vue-slider-mark-step {
  display: none;
}
.vue-slider-mark-step {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.16);
}
.vue-slider-mark-label {
  font-size: 14px;
  white-space: nowrap;
}
/* dot style */
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
}
.vue-slider-dot-handle-focus {
  box-shadow: 0px 0px 1px 2px rgba(52, 152, 219, 0.36);
}

.vue-slider-dot-handle-disabled {
  cursor: not-allowed;
  background-color: #ccc;
}

.vue-slider-dot-tooltip-inner {
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border-color: #ffffff !important;
  background-color: #ffffff !important;
  box-sizing: content-box;
}
.vue-slider-dot-tooltip-inner::after {
  content: "";
  position: absolute;
}
.vue-slider-dot-tooltip-inner-top::after {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-top-color: inherit;
}
.vue-slider-dot-tooltip-inner-bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-bottom-color: inherit;
}
.vue-slider-dot-tooltip-inner-left::after {
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-left-color: inherit;
}
.vue-slider-dot-tooltip-inner-right::after {
  right: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-right-color: inherit;
}

.vue-slider-dot-tooltip-wrapper {
  opacity: 0;
  transition: all 0.3s;
}
.vue-slider-dot-tooltip-wrapper-show {
  opacity: 1;
}

/*# sourceMappingURL=default.css.map */

</style>
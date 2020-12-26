<template>
  <div class="flex items-center">
    <img
      class="mr-1 w-10 h-10 object-cover rounded-full hidden sm:block"

      :src="require('@/assets/images/avatar.jpeg')"
      alt="avatar"
    >
    <span
      class="mx-2 font-semibold"
      :class="dark ? 'text-white' : 'text-gray-700'"
    >Fabricio Zeferino</span>
  </div>
</template>

<script>
export default {
  name: 'BaseAvatar',


  props: {
    dark: {type: Boolean, default: false},
  },
}
</script>
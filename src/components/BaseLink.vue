<template>
  <router-link
    class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
    :to="routeTo"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    label: {type: String, required: true},
    routeTo: {type: String, required: true},
  },
}
</script>
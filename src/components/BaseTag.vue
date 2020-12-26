<template>
  <span
    v-if="label === 'Vue.js'"
    class="font-medium border rounded-full px-3 py-1"
    style="color: #4fc08d; border-color: #4fc08d;"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  name: 'BaseTag',
  props: {
    label: {type: String, required: true},
  },
}
</script>
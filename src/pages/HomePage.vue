<template>
  <div class="flex flex-col justify-center items-center w-full max-w-4xl mb-40 mx-auto">
    <div class="px-8 py-4 bg-white  overflow-hidden">
      <h1 class="leading-snug font-bold mb-4">
        Hello! My name is <span class="text-gray-900">Fabricio Zeferino.</span> I am a full-stack web developer. Based in UK 🇬🇧.
      </h1>

      <div class="flex justify-end items-center">
        <div class="flex items-center">
          <img
            class="mx-2 w-10 h-10 object-cover rounded-full hidden sm:block"
            src="https://github.com/fabriciozeferino.png?size=460"
            alt="avatar"
          >
          <span class="font-medium">Fabricio Zeferino</span>
        </div>
      </div>
    </div>

    <p class="my-8">
      Having fun with <span style="color: #4fc08d">Vue.js</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.bg-image-1 {
  background-image: url('~@/assets/images/bg-02.jpg')
}
</style>
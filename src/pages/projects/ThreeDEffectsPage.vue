<template>
  <div class="perspective flex justify-center items-center h-screen sm:h-full w-full">
    <div
      ref="card"
      class="preserve-3d w-full lg:max-w-3xl h-full py-4 sm:py-8"
      @mousemove="mousemoveElement"
      @touchmove.passive="mousemoveElement"
      @mouseenter="mouseenterElement"
      @touchenter.passive="mouseenterElement"
      @mouseleave="mouseleaveElement"
      @touchleave.passive="mouseleaveElement"
    >
      <div
        class="card rounded-3xl bg-white dark:bg-black-light py-4 px-10 sm:px-10 sm:max-w-xs mx-auto sm:min-h-0"
      >
        <div
          ref="sneaker"
          class="h-48 sm:h-80 flex justify-center items-center transition-transform"
        >
          <div
            id="circle"
            class="w-40 sm:w-60 h-40 sm:h-60 z-10 rounded-full absolute transition-transform shadow"
          />
          <img
            id="sneaker"
            class="w-80 z-20 relative transition-transform"
            :src="require('@/assets/images/adidas.png')"
            alt="adidas"
          >
        </div>
        <div>
          <h1
            ref="title"
            class="transition-transform text-shadow text-xl sm:text-3xl"
          >
            Adidas ZX
          </h1>
          <p
            ref="description"
            class="uppercase opacity-75 py-2 sm:py-8 leading-6 transition-transform text-shadow text-sm sm:text-base"
          >
            future-ready trainers with wrapped boost for exception comfort.
          </p>
          <div
            ref="sizes"
            class="sizes flex justify-between flex-wrap font-bold text-gray-300 mb-4 sm:mb-16 transition-transform"
          >
            <button
              v-for="item in [37,38,39,40,41,42]"
              :key="item"
              class="py-2 px-4 m-2"
              :class="isActive(item) ? 'active' : null"
              @click="setSize(item)"
            >
              {{ item }}
            </button>
          </div>
          <div
            ref="purchase"
            class="transition-transform"
          >
            <button class="w-full bg-default-red text-white font-extrabold py-4 rounded-3xl shadow mb-4">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeDEffectsPage',
  data() {
    return {
      size: 41,
    }
  },
  methods: {
    mousemoveElement(e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25

      this.$refs.card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    },

    mouseenterElement() {
      this.$refs.card.style.transition = 'none'
      //Popout
      this.$refs.title.style.transform = 'translateZ(40px)'
      this.$refs.sneaker.style.transform = 'translateZ(50px)'
      this.$refs.description.style.transform = 'translateZ(40px)'
      this.$refs.sizes.style.transform = 'translateZ(40px)'
      this.$refs.purchase.style.transform = 'translateZ(25px)'
    },

    mouseleaveElement() {
      this.$refs.card.style.transition = 'all 1.5s ease'
      this.$refs.card.style.transform = 'rotateY(0deg) rotateX(0deg)'

      //Popback
      this.$refs.title.style.transform = 'translateZ(10px)'
      this.$refs.sneaker.style.transform = 'translateZ(10px)'
      this.$refs.description.style.transform = 'translateZ(10px)'
      this.$refs.sizes.style.transform = 'translateZ(10px)'
      this.$refs.purchase.style.transform = 'translateZ(10px)'
    },

    isActive(size) {
      return this.size === size
    },

    setSize(size) {
      return this.size = size
    },
  },
}

</script>

<style scoped>
* {
  touch-action: none;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}

.perspective {
perspective: 1000px;
}

.preserve-3d {
transform-style: preserve-3d;
}

.shadow {
box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2),
0 0 50px rgba(0, 0, 0, 0.2);
}

.text-shadow {
text-shadow: 0 2px 50px rgba(0, 0, 0, 0.7);
}

.card {
box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2),
0 0 50px rgba(0, 0, 0, 0.2);
}

@media (min-width: 450px) {
  .card {
    min-width: 370px;
  }
}

#circle {
background: linear-gradient(
    to right,
    rgba(245, 70, 66, 0.75),
    rgba(8, 83, 156, 0.75)
);
}


.sizes button {
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 30px;
cursor: pointer;
}

.sizes button.active {
background: #585858;
color: white;
border-style: none;
outline: 0;
}

button:focus {
outline: 0;

}
</style>
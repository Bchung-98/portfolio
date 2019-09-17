<template>
  <div class="scrolldown">
    <img class="molette" src="~/assets/scrolldown/molette.svg" alt="souris">
    <img class="souris" src="~/assets/scrolldown/souris.svg" alt="souris">
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      wheel: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.mouseWheelEvent)
    window.addEventListener('mousewheel', this.mouseWheelEvent)
  },
  methods:{
    mouseWheelEvent(e) {
      this.scrollY = window.scrollY
      let delta = e.wheelDelta ? e.wheelDelta : -e.detail
      this.wheel += delta

      this.$el.style.opacity = this.scrollY > 100 || this.wheel < 100 || this.wheel >-100 ? 0 : 1
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.mouseWheelEvent)
    window.removeEventListener('mousewheel', this.mouseWheelEvent)
  },
}
</script>

<style scoped>
.scrolldown {
  display: flex;
  justify-content: center;
  opacity: .8;
  transition: .5s;
  z-index: 100;
}

.molette {
  transform: translateY(0);
  animation: scroll 3s infinite;
}

@media screen and (max-width: 1024px) and (orientation: portrait) {
  img {
    position: absolute;
    bottom: 40px;
    width: 40px;
  }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  img {
    position: absolute;
    bottom: 30px;
    width: 30px;
  }
}

@media screen and (min-width: 1024px) {
  img {
    position: absolute;
    bottom: 50px;
    width: 50px;
  }
}

@keyframes scroll {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  33% {
    opacity: 1;
    transform: translateY(0);
  }
  66% {
    opacity: 1;
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>

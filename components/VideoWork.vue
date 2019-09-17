<template>
  <div v-if="visible" class="vidwork" @mouseenter="hover=true" @mouseleave="hover=false">
    <div class="video-container">
      <video id="vid" :src="require(`~/assets/${preview}`)" preload="auto" autoplay loop :muted="sound"></video>
    </div>
    <transition name="fade">
    <div class="text" v-if="hover">
      <p class="page">0{{ number }}</p>
      <h2>{{ title }}</h2>
      <div class="infos">
        <div class="role">
          <h3>Role</h3>
          <span>{{ role }}</span>
        </div>
        <div class="context">
          <h3>Context</h3>
          <span>{{ context }}</span>
        </div>
        <div class="tools">
          <h3>Tools</h3>
          <span>{{ tools }}</span>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    preview: String,
    title: String,
    sound: Boolean,
    role: String,
    context: String,
    tools: String,
    number: Number,
  },
  data() {
    return {
      index: 0,
      hover: false,
    }
  },
  computed: {
    visible() {
      return this.index===this.$parent.index
    }
  },
}
</script>

<style scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.fade-enter-active, .fade-leave-active {
  transition: .5s;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: translateY(0px);
}

.vidwork {
  position: absolute;
  width: 45vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.video-container {
  overflow: hidden;
  width: 45vw;
  border: 2px solid darkgray;
  display: flex;
  justify-content: center;
  z-index: -100;
}

#vid {
  width: 45vw;
  height:100%;
}

.text {
  color: white;
  position: absolute;
  width: 40vw;
  text-shadow: 0 5px 30px black;
  left: -5vw;
  bottom: -3.5vw;
}

.text .page {
  width: 10vw;
  font-size: 10vw;
  font-family: 'Raleway-bold';
  position: relative;
  left: 45vw;
}

.text h2 {
  font-size: 4.5vw;
  font-family: 'Raleway-bold';
  margin-bottom: 1vw;
}

.infos {
  width: 30vw;
  display: flex;
  justify-content: space-between;
  opacity: .8;
}

.role, .context, .tools {
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 1.3vw;
  margin: 0;
}

span {
  font-size: 1vw;
  margin: 0;
}
</style>

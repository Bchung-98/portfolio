<template>
  <div class="imgworkmob">
    <div class="img-container-mob">
      <img :src="require(`~/assets/${preview}`)">
    </div>
    <div class="text">
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
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1024px) and (orientation: portrait) {
  .imgworkmob {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  .imgworkmob {
    width: 100vw;
    height: 150vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .imgworkmob {
    display: none;
  }
}

.img-container-mob {
  overflow: hidden;
  width: 70vw;
  border: 2px solid darkgray;
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
}

.text {
  color: white;
  position: absolute;
  text-shadow: 0 5px 30px black;
  left: 10vw;
  margin-top: -1.3vw;
}

.text .page {
  width: 15vw;
  font-size: 15vw;
  font-family: 'Raleway-bold';
  position: relative;
  left: 70vw;
  top: -3vw;
}

.text h2 {
  font-size: 7vw;
  font-family: 'Raleway-bold';
  margin-bottom: 1vw;
}

.infos {
  width: 60vw;
  display: flex;
  justify-content: space-between;
  opacity: .8;
}

.role, .context, .tools {
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 2.5vw;
  margin: 0;
}

span {
  font-size: 2vw;
  margin: 0;
}
</style>


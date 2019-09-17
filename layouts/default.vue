<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style>
@font-face {
  font-family: 'Raleway';
  src: url('~static/fonts/Raleway-Regular.ttf');
}

@font-face {
  font-family: 'Raleway-bold';
  src: url('~static/fonts/Raleway-Bold.ttf');
}

@font-face {
  font-family: 'Raleway-black';
  src: url('~static/fonts/Raleway-Black.ttf');
}

html {
  font-family: "Raleway";
  color: white;
  background: black;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
}
</style>

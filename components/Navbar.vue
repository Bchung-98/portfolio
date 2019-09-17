<template>
  <div class="navbar">
    <ul>
      <li><nuxt-link to="/">About</nuxt-link></li>
      <li><nuxt-link to="/dev-work">Dev. Work</nuxt-link></li>
      <li><nuxt-link to="/design-work">Design Work</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (max-width: 1024px) and (orientation: portrait) {
  .navbar {
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 100;
    width: 100vw;
    top: 30px;
    right: 20px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 80vw;
  }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  .navbar {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    width: 100vw;
    top: 30px;
    right: 50px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    width: 50vw;
  }
}

@media screen and (min-width: 1024px) {
  .navbar {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    width: 100vw;
    top: 50px;
    right: 50px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    width: 30vw;
  }
}

ul li {
  display: inline;
}

li a {
  color: white;
  text-decoration: none;
  opacity: .8;
  transition: .5s;
  font-size: 16px;
}

li a:hover {
  opacity: .5;
  transition: .5s;
}
</style>

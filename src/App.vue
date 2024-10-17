<template>
  <img alt="Photo stickers" src="./assets/photo.jpg" id="photo">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <HeaderComponent msg="Welcome to My Site.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#photo {
  width: 10%;
  height: 10%;
}
</style>

<template>
  <SidebarComponent msg="Sidebar" id="Sidebar"/>
  <ProfileCard/>
  <AboutMe></AboutMe>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue';
import ProfileCard from './components/ProfileCard.vue';
import AboutMe from './components/AboutMe.vue';

export default {
  name: 'App',
  components: {
    SidebarComponent,
    ProfileCard,
    AboutMe
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

</style>

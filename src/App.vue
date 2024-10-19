<template>
  <SidebarComponent msg="Sidebar" id="Sidebar"/>
  <ProfileCard/>
  <HeaderComponent msg="Welcome to My Site.js App"/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue';
import ProfileCard from './components/ProfileCard.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderComponent,
    SidebarComponent,
    ProfileCard
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

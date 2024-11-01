<template>
  <SidebarComponent msg="Sidebar" id="Sidebar" @scroll-to-section="scrollToSection"/>
  <ProfileCard id = "home"/>
  <AboutMe id = "aboutMe"></AboutMe>
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
  },
  methods: {
    scrollToSection(sectionId) {
      // 根據 sectionId 滾動到對應的區域
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(`Section with id "${sectionId}" not found.`);
      }
    }
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

#home {
  position:absolute;
  top: 0;
}

#aboutMe {
  position: absolute;
  top: 100%;
}

</style>

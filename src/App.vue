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
      const section = document.getElementById(sectionId);
      if (!section) {
        console.error(`Section with id "${sectionId}" not found.`);
        return;
      }

      // 獲取滾動起點和終點
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;

      // 設置滾動時長（毫秒）
      const duration = 1000; // 例如，1秒
      let startTime = null;

      // 滾動動畫函數
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // 計算滾動進度
        const progress = Math.min(timeElapsed / duration, 1);
        
        // 平滑滾動公式（使用 easeInOutCubic 函數）
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      // 平滑滾動的公式（緩入緩出效果）
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      // 啟動動畫
      requestAnimationFrame(animation);
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

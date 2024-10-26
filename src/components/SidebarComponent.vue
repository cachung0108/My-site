<template>
  <div 
    class="trigger-area" 
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
  ></div>
  <div 
    class="sidebar" 
    :class="{ 'show-sidebar': isHovered }" 
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
  >
    <button @click="navigate('home')">Home</button>
    <button @click="navigate('aboutMe')">About Me</button>
    <button @click="navigate('mySkill')">My Skill</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false, // 控制 sidebar 顯示與隱藏的狀態
    };
  },
  methods: {
    navigate(sectionId) {
      this.$emit('scroll-to-section', sectionId);
    }
  }
}
</script>

<style scoped>
/* 偵測區域，當滑鼠進入該區域時觸發 sidebar 顯示 */
.trigger-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px; /* 可調整偵測區域的高度 */
  z-index: 999; /* 確保偵測區域在最上方 */
}

.sidebar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: -60px; /* 初始位置，隱藏在螢幕外 */
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #3498db;
  color: white;
  z-index: 1000;
  transition: top 0.3s ease; /* 平滑過渡效果 */
}

.show-sidebar {
  top: 0; /* 滑鼠靠近時顯示 sidebar */
}

button {
  background-color: white;
  color: #3498db;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}
</style>

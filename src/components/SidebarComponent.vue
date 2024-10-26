<template>
    <div class="sidebar">
      <button @click="navigate('home')">Home</button>
      <button @click="navigate('aboutMe')">About Me</button>
      <button @click="navigate('mySkill')">My Skill</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigate(sectionId) {
        this.$emit('scroll-to-section', sectionId);
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    display: flex;
    justify-content: space-around;  /* 平均分佈按鈕 */
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #3498db;
    color: white;
    z-index: 1000;  /* 確保在最上方 */
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
  
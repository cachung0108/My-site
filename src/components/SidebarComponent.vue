<template>
    <div class="sidebar">
      <button @click="navigate('Home')">Home</button>
      <button @click="navigate('About Me')">About Me</button>
      <button @click="navigate('My Skill')">My Skill</button>
      <button @click="navigate('Contact Me')">Contact Me</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigate(page) {
        console.log(`Navigating to ${page}`);
        // 這裡可以根據需要添加實際的導航邏輯，例如使用 Vue Router
        // this.$router.push({ name: page });
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
  
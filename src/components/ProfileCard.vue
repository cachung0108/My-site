<template>
    <div class="profileCard">
        <img alt="Photo stickers" src="../assets/photo.jpg" id="photo">
        <header>
            <h1>Chi-An Chung</h1>
            <p>NCHU CSIE</p>
            <a href="mailto:cachung0108@gmail.com">cachung0108@gmail.com</a>
            <br>
            <a href="https://github.com/cachung0108" target="_blank">GitHub</a>
            <br>
            <a href="https://www.linkedin.com/in/chi-an-chung-63bb17316/" target="_blank">LinkedIn</a>
        </header>
    </div>
</template>

<style scoped>
.profileCard {
    width: 100vw;
    height: 100vh; 
}
#photo {
  margin-top: 30px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 10px solid #3498db; 
  object-fit: cover; 
}
</style>
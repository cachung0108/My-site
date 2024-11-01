<template>
    <div class="profileCard">
        <img alt="Photo stickers" src="../assets/images/photo.jpg" id="photo">
        <div id = "contact">
            <h1>Chi-An Chung</h1>
            <p>NCHU CSIE</p>
            <div class="icon-container">
                <a href="mailto:cachung0108@gmail.com">
                    <img src="../assets/images/gmail.png" alt="點擊圖片跳轉到網站" class="clickable-image">
                </a>
                <br>
                <a href="https://github.com/cachung0108" target="_blank">
                    <img src="../assets/images/github.png" alt="點擊圖片跳轉到網站" class="clickable-image">
                </a>
                <br>
                <a href="https://www.linkedin.com/in/chi-an-chung-63bb17316/" target="_blank">
                    <img src="../assets/images/linkedin.png" alt="點擊圖片跳轉到網站" class="clickable-image">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profileCard {
    width: 100vw;
    height: 100vh;
    text-align: left;
    position: relative;
    overflow: hidden; /* 確保偽元素不會超出範圍 */
}

.profileCard::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/background1.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(8px); /* 模糊效果 */
    opacity: 0.5; /* 透明度，讓背景變淺 */
    z-index: -1; /* 讓背景層位於內容下方 */
}

#contact{
    position: relative;
    left: 100px;
    display: inline-block;
    padding: 10px; /* 可選的內距，讓內容不貼邊 */
}
#photo {
    position: relative;
    left: 100px;
    margin-top: 100px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 10px solid #3498db; 
    object-fit: cover; 
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
.clickable-image {
    width: 100px;
    height: 100px;
    border-radius: 30px;        /* 圓角 */
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8); /* 陰影 */
    transition: transform 0.2s; /* 點擊時縮放效果 */
}

.clickable-image:hover {
    transform: scale(1.05); /* 鼠標懸停效果 */
}
.icon-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    gap: 10px; /* 圖片之間的間距 */
    margin-top: 10px;
}
</style>
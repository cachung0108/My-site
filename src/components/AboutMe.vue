<template>
    <div class = "aboutMe">
        <div class="textBlock">
            <p>
                我的名字叫鍾期安，目前在中興大學無線網路實驗室進行網路相關研究。​在大學時期曾經完成許多專案包括：
                <br>
                網頁程式設計課使用HTML、JS、CSS完成嘉義番路鄉的介紹網站​
                <br>
                畢業專題負責網頁程式的前端以及資料庫，使用Vue.js以及MongoDB完成​
                <br>
                目前於中興大學無線通訊暨雲端計算進行802.11be MLO技術研究。​
                <br>
                碩一時修習了新型態網路技術、雲端計算與網路課程，除此之外也擔任實驗室研究助理。​
            </p>    
        </div>
    </div>
</template>

<style scoped>
.aboutMe {
    width: 100vw;           /* 設置寬度為100%的視窗寬度 */
    height: 100vh;          /* 設置高度為100%的視窗高度 */
    background-color: #add8e6;  /* 設置淺藍色背景 (#add8e6) */
    display: flex;
    justify-content: center; /* 讓內容在水平居中 */
    align-items: center;     /* 讓內容在垂直居中 */
}
.textBlock {
    height: 80%;
    width: 80%;
    background-color: #f9f9f9; /* 文字區塊背景設置為淺灰色 */
    padding: 15px; /* 內部邊距 */
    margin-bottom: 15px; /* 區塊間距 */
    border: 1px solid #ddd; /* 添加邊框 */
    border-radius: 5px; /* 邊角圓滑 */
    text-align: left; /* 文字靠左對齊 */
    font-family: 'PingFang TC', 'Microsoft JhengHei', 'Heiti TC', 'Noto Sans TC', 'DFKai-SB', 'SimSun', sans-serif;
}
</style>
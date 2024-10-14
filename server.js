const express = require('express');
const path = require('path');
const app = express();

// 設定靜態檔案夾，指向 Vue.js 打包後的資料夾
app.use(express.static(path.join(__dirname, 'dist')));

// 將所有的請求轉送到 Vue.js 應用程式
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 設定伺服器監聽的埠號
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

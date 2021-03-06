# Restaurant List

這是一個利用 Express.js、Bootstrap、Handlebars、mongoDB 所製作的網站，在這份專案中會了解到如何設定路由、製作 Handlebars 樣板、發送及接受 Handlebars 參數顯示動態資料、Handlebars 的迴圈應用等技巧。資料庫部分由mongodb實作CRUD功能。

![restaurantList](https://github.com/chris1085/AC-restaurantList/blob/main/restaurantList.png)

![CRUD](https://github.com/chris1085/AC-restaurantList/blob/main/CRUD.png)

## Updated
- 2021.03.11 建立餐廳清單(Get and search function)
- 2021.03.24 加入MongoDB，新增CRUD功能
- 2021.03.26 重構網站並新增排序功能
## Installation

```bash
#移動並創建本地資料夾
mkdir -p /installation/path && cd /installation/path

#從GitHub複製專案至本地資料夾
git clone https://github.com/chris1085/AC-restaurantList.git
cd AC-restaurantList

#從package.json中安裝express、express-handlebars套件
npm install

#可能需要安裝eslint standard及nodemon
npm i -D eslint eslint-config-standard
npm i -g nodemon

#官網下載並安裝mongoDB後執行
/mongodb/installation/path/bin/mongod --dbpath /mongodb-data/path

#新增MongoDB collection "restaurantList" 並新增種子資料
npm run seeds

#測試專案
npm run dev
```

## Features

- 利用 Bootstrap 製作 RWD 網站樣式
- 使用 Express.js、Handlebars 製作網站及路由設定
- 用 Query String 打造搜尋功能
- 將網頁依照 Layouts 拆成多個部分樣版的 hadlebars 方便維護
- 使用 MongoDB 實作新增、瀏覽、刪除、修改、排序功能
- 將 Routes 拆成多個 modules 方便維護
- 使用 "body-parser" NPM package 接收 request 內容
- 使用 "method-override" NPM package 將 Form 的方法新增PUT、DELETE、PATCH

## Tools

- Express - 應用程式框架執行後端環境
- Handlebars - Web 模板系統搭建前端介面
- Bootstrap - 開源前端框架美化前端介面
- MongoDB - 資料庫系統製作CRUD及排序功能


## Contribute

感謝[Alpha Camp](https://tw.alphacamp.co/)提供此次專案素材及資源

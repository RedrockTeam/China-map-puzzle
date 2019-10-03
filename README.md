# 中国地图拼拼看

> China-map-puzzle-game

## 项目介绍
1. 中国地图拼图闯关游戏，依次点相邻两块交换位置
2. 一共四个关卡，拼图个数分别为`2*2`、`3*3`、`4*4`、`5*5`，拼好图即闯关成功
3. 只有通过前一关卡才能选择下一关卡，每一关卡计时，可重复闯关，用时短者排名靠前

**项目截图**
<div display = "flex" flex-wrap = "wrap" width="400" height="700" justify-centent = "center" align-items = "center">
<!-- 1. 首页 -->
<!-- ![Image text](https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/home.jpg) -->
<img src="https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/home.jpg" width="150" height="300" alt="首页">

<!-- 2. 关卡选择 -->
<!-- ![Image text](https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/pass.jpg) -->
<img src="https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/pass.jpg" width="150" height="300" alt="关卡选择">

<!-- 3. 游戏页面 -->
<!-- ![Image text](https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/game.jpg) -->
<img src="https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/game.jpg" width="150" height="300" alt="游戏页面">

<!-- 4. 查看原图 -->
<!-- ![Image text](https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/pic.jpg) -->
<img src="https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/pic.jpg" width="150" height="300" alt="查看原图">

<!-- 5. 排行榜 -->
<!-- ![Image text](https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/rankList.jpg) -->
<img src="https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/home.jpg" width="150" height="300" alt="排行榜">

</div>

## 使用方法
#### 开发环境

~~~
$ yarn install

$ yarn run serve
~~~



#### 生产环境
~~~
$ yarn run build
~~~



## 技术栈
* vue
* vue-router
* vuex
* webpack
* axios


## 目录结构

├─common
│  ├─config
│  └─service
├─public
├─README-img
└─src
    ├─assets
    │  ├─font
    │  ├─img
    │  │  ├─common
    │  │  ├─game
    │  │  ├─home
    │  │  ├─pass
    │  │  └─rank
    │  ├─js
    │  └─styles
    ├─common
    │  └─service
    ├─components
    ├─router
    ├─store
    │  └─type
    └─views

## 接口文档
[接口文档](链接：https://easydoc.xyz/#/s/39808233)


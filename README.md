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
<img src="https://github.com/RedrockTeam/China-map-puzzle/blob/master/README-img/rankList.jpg" width="150" height="300" alt="排行榜">

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

```
├─public                //入口文件index.html和图标favicon.ico
├─README-img            //README.md中的图片，使用 https://tinypng.com 压缩
└─src                   //主要代码
    ├─assets                 //静态资源
    │  ├─font                      //字体，提取所需要的字压缩过的
    │  ├─img                       //图片，使用 https://tinypng.com 压缩
    │  │  ├─common                        //通用图片
    │  │  ├─game                          //游戏页面所用图片
    │  │  ├─home                          //首页所用图片
    │  │  ├─pass                          //关卡选择页所用图片
    │  │  └─rank                          //排行榜页所用图片
    │  ├─js                        //puzzle.js拼图逻辑
    │  └─styles                    //通用common.css和游戏页面使用game.scss
    ├─common             //通用配置
    │  └─service               //api配置
    ├─components         //功能组件
    ├─router             //路由
    ├─store              //vuex相关
    │  └─type                  //actions和mutations常量声明
    └─views              //页面组件
```

## 接口文档
[接口文档](https://easydoc.xyz/#/s/39808233)

## 拼图逻辑

```
// 传入的参数为拼图的行列数num
var chart = new Array();
var d_direct = new Array();

var initPuzzle = function initPuzzle(num) {

    // 拼图的数组
    // var chart = new Array();

    // 初始化二维数组并按顺序赋值
    for (var i = 0, k = 0; i < num; i++) { //一维长度为num
        chart[i] = new Array(); //再声明二维 
        for (var j = 0; j < num; j++) { //二维长度为num
            chart[i][j] = k; // 赋值1，2，3...的顺序号,行优先
            document.getElementById("d" + chart[i][j]).style.order = k; //设置flex布局子元素的order
            k++;
        }
    }

    // 拼图的背景
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {

            document.getElementById("d" + chart[i][j]).style.backgroundPositionX = j * (100 / (num - 1)) + "%";
            document.getElementById("d" + chart[i][j]).style.backgroundPositionY = i * (100 / (num - 1)) + "%";
        }
    }

    // 存储每个位置的相邻位置，即可移动到的（可交换的）位置，此数组初始化后将不会发生改变
    // var d_direct = new Array();
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            var id = chart[i][j];
            d_direct[id] = new Array(4); //以每个拼图块的顺序号做为下标建立数组，存其可交换的位置

            //拼图块可交换位置不多于4个
            // 按上下左右的顺序存，每个方向需判断是否存在可交换的

            if (i == 0) {
                d_direct[id][0] = ''; //第一行不存在向上交换
            } else {
                d_direct[id][0] = chart[i - 1][j]
            }
            if (i == num - 1) {
                d_direct[id][1] = ''; //最后一行不存在向下交换
            } else {
                d_direct[id][1] = chart[i + 1][j]
            }
            if (j == 0) {
                d_direct[id][2] = ''; //第一列不存在向左交换
            } else {
                d_direct[id][2] = chart[i][j - 1]
            }
            if (j == num - 1) {
                d_direct[id][3] = ''; //最后一列不存在向右交换
            } else {
                d_direct[id][3] = chart[i][j + 1]
            }
        }
    }


}


// 移动拼图,传入的四个参数分别为第二次点击的拼图块的id，第一次点击的拼图块的firstId,拼图的行列数num，关卡的状态flag
var move = function move(id, firstId, num) {
    // 假设需要移动的为第0的位置和第3个位置，2*2，现在在第0个位置的先点击firstId为1，在第3个位置的id为1

    let id_pos, first_id_pos;
    let m, n, x, y;
    // 找到存储的数据为id的位置
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            // [0][0]的位置为为第一次点击拼图块的位置，m=0,n=0,同时，第一次点击的位置的序列号为first_id_pos=0
            if (chart[i][j] == firstId) {
                first_id_pos = num * i + j; //通过二维数组的下标计算出存储firstId的位置序列
                m = i;
                n = j;
            }
// [1][1]的位置为为第二次点击拼图块的位置,x=1,y=1，同时第二次点击的位置的序列号为id_pos=3
            if (chart[i][j] == id) {
                id_pos = num * i + j; //通过二维数组的下标计算出存储id的位置序列
                x = i;
                y = j;
            }
        }
    }
    if (canIf(first_id_pos, id_pos, d_direct)) {
        // 可以交换则交换两个拼图块所在位置对应的二维数组处所存储的id
        // 二维数组存储的数据为拼图块div的id

        chart[m][n] = id;
        chart[x][y] = firstId;

        // 交换两个拼图块,通过设置flex布局子元素的order改变位置
        document.getElementById("d" + id).style.order = first_id_pos;
        document.getElementById("d" + firstId).style.order = id_pos;
        console.log(d_direct)
    }

}
// first_id_pos=0  id_pos=3
function canIf(first_id_pos, id_pos, d_direct) {
    var move_flag = false;
    // 遍历id拼图块可交换位置，判断此次交换尝试是否可交换
    for (var j = 0; j < 4; j++) {
        if (d_direct[id_pos][j] == first_id_pos) {
            move_flag = true;
            break;
        }
    }
    return move_flag;
}
```


// 拼图的数组
var chart = new Array();
// 存储每个位置的相邻位置，即可移动到的（可交换的）位置，此数组初始化后将不会发生改变
var d_direct = new Array();

// 传入的参数为拼图的行列数num
var initPuzzle = function initPuzzle(num) {
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


// 移动拼图,传入的四个参数分别为第二次点击的拼图块的id，第一次点击的拼图块的firstId,拼图的行列数num
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
// 判断是否可以交换
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


module.exports = {
    initPuzzle,
    move,
    chart,
}
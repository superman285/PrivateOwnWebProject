
var input = document.getElementsByTagName("input")[0];


//readyState为ajax的状态码，1到4

// 1. 创建ajax对象
let xhr = new XMLHttpRequest();

// 2. 链接后端地址 准备数据
// open(提交方式,后台文件接口地址,是否异步)
// true代表异步;false代表同步
xhr.open("GET","./get.php?user="+input.value);
//
//xhr.open("POST","./post.php");

xhr.onload = function() {
    console.log(xhr.responseText);
};

// 3.发送数据
xhr.send();
/* post方式需要设置请求头
* xhr.setRequestHeader("Context-Type","application/x-www-form-urlencoded")
* var data = input.value;
* xhr.send(data);
*/

// 4.发送数据之后
// 服务器响应完毕后会触发一个时间 onload事件
// 响应的结果会被 ajax对象的responseText：请求回来的数据存在这个属性中
// 响应完毕后才会执行onload，但在send之前声明更好


//要注意获取到的数据的格式问题，数组可能会被输出成json或者别的格式，还需要处理一下

/*
xhr.onload = function() {
    console.log(xhr.responseText);
};*/1

// 每次状态变化都会触发 1.到2. 2.到3. 3.到4. 不判断会打3次
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4) {
        //则只打印一次
        console.log(1);
    }
};




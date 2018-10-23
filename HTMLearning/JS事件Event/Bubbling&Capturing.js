

var box = document.querySelector("#box");
var body = document.querySelector("#body");

body.addEventListener("click",function () {
    alert("点击了body")
},true);

box.addEventListener("click",function (e) {
    e.stopPropagation();
    alert("点击了box")
},true);



//addEventListener中最后一个参数，
// false - 代表从最指定元素往外层找 #事件冒泡 bubbling 像一个泡泡不断往外冒
//true - 代表从最外层往指定元素找 #事件捕获 capturing 像在一片大草原捕捉兔子，不断往里缩小范围
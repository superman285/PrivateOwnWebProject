
var wrap1 = document.getElementsByClassName("Wrap1")[0];

var imgul = document.getElementsByClassName("imgul");
var imgli = imgul[0].getElementsByClassName('imgli');
var controlWrap = document.getElementsByClassName("controlWrap")[0];
var control = controlWrap.getElementsByClassName('control');
var arrL = document.getElementsByClassName("arrowL")[0],
    arrR = document.getElementsByClassName("arrowR")[0];

var clickIndex = 0;
var canClick = true;
var clickTimer = null;

init();

arrL.onclick = function () {
    if (canClick) {
        console.log("left");
        clickIndex = clickIndex == 0 ? imgli.length - 1 : --clickIndex;
        sliderPos(clickIndex);
        controlPos(clickIndex);

        canClick = false;
        clickTimer = setTimeout(function () {
            canClick = true;
            clearTimeout(clickTimer);
        }, 500);
    }
};

arrR.onclick = function () {
    if (canClick) {
        console.log("right");
        clickIndex = clickIndex == imgli.length-1? 0 : ++clickIndex;
        sliderPos(clickIndex);
        controlPos(clickIndex);

        canClick = false;
        clickTimer = setTimeout(function () {
            canClick = true;
            clearTimeout(clickTimer);
        }, 500);
    }
};

//初始化
function init() {
    controlPos(0);
    sliderPos(0);
    controlEvent();
}

//底部点位置
function controlPos(index) {
    for (let i = 0; i < control.length; i++) {
        control[i].style.backgroundColor = "";
    }
    control[index].style.backgroundColor = "orangered";
}

//图片位置
function sliderPos(index) {
    for (let i = 0; i < imgli.length; i++) {
        imgli[i].classList.add('unactive');
    }
    imgli[index].classList.remove('unactive');
    imgul[0].style.left = -800 * index + 'px';
}

//绑定底部控制点事件
function controlEvent() {
    for (var i = 0; i < control.length; i++) {
        control[i].index = i;
        control[i].onmouseover = function () {
            clickIndex = this.index;
            sliderPos(clickIndex);
            controlPos(clickIndex);
        }
    }
}
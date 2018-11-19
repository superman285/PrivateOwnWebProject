




var wrap1 = document.getElementsByClassName("Wrap1")[0];

var imgul = document.getElementsByClassName("imgul");
var imgul2 = document.getElementsByClassName("imgul2");
var imgli = imgul[0].getElementsByClassName('imgli');
var imgli2 = imgul2[0].getElementsByClassName("imgli2");

var controlWrap = document.getElementsByClassName("controlWrap")[0];
var controlWrap2 = document.getElementsByClassName("controlWrap2")[0];

var control = controlWrap.getElementsByClassName('control');
var control2 = controlWrap2.getElementsByClassName("control2");

var arrL = document.getElementsByClassName("arrowL"),
    arrR = document.getElementsByClassName("arrowR");

var clickIndex = 100;
var clickIndex2 = 600;

var curIndex = 0;
var curIndex2 = 0;


setControlPos();
setControlPos2();

function setImgPos() {
    curIndex = clickIndex % 5;
    imgul[0].style.left = -500 * curIndex + "px";
}
function setImgPos2() {
    curIndex2 = clickIndex2 % 6;
    imgul2[0].style.left = -500 * curIndex2 + "px";
}

function setControlPos() {
    curIndex = clickIndex % 5;
    control[curIndex].style.backgroundColor = "orangered";
}
function setControlPos2() {
    curIndex2 = clickIndex2 % 6;
    control2[curIndex2].style.backgroundColor = "black";
}


arrL[0].onclick = function() {
    control[curIndex].style.backgroundColor = "";
    if(!clickIndex){
        console.log('索引1到0了');
        clickIndex = 100;
    }
    clickIndex --;
    setImgPos();
    setControlPos();
};
arrR[0].onclick = function() {
    control[curIndex].style.backgroundColor = "";
    clickIndex++;
    setImgPos();
    setControlPos();
};
arrL[1].onclick = function() {
    control2[curIndex2].style.backgroundColor = "";
    if(!clickIndex2){
        console.log('索引2到0了');
        clickIndex2 = 600;
    }
    clickIndex2 --;
    setImgPos2();
    setControlPos2();
};
arrR[1].onclick = function() {
    control2[curIndex2].style.backgroundColor = "";
    clickIndex2++;
    setImgPos2();
    setControlPos2();
};

controlEvent();
controlEvent2();

function controlEvent() {
    for (var i = 0; i < control.length; i++) {
        control[i].index = i;
        var temp = control[0];
        control[i].onclick = function () {
            clickIndex = this.index;
            console.log("获取的索引值1:" + clickIndex);
            setImgPos();
            temp.style.backgroundColor = "";
            this.style.backgroundColor = "orangered";
            temp = this;
        }
    }
}
function controlEvent2() {
    for (var i = 0; i < control2.length; i++) {
        control2[i].index = i;
        var temp2 = control2[0];
        control2[i].onclick = function () {
            clickIndex2 = this.index;
            console.log("获取的索引值2:" + clickIndex2);
            setImgPos2();
            temp2.style.backgroundColor = "";
            this.style.backgroundColor = "black";
            temp2 = this;
        }
    }
}






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


//上轮播
slideFunction(clickIndex,curIndex,5,imgul,control,"orangered",0,100);
//下轮播
slideFunction(clickIndex2,curIndex2,6,imgul2,control2,"black",1,600);

setInterval(function(){arrR[0].click()},3000);


function slideFunction(clickIndex,curIndex,modNum,imgul,control,controlColor,arrIdx,safeIndex) {
    setControlPos();
    controlEvent();

    function setImgPos() {
        curIndex = clickIndex % modNum;
        imgul[0].style.left = -500 * curIndex + "px";
    }

    function setControlPos() {
        curIndex = clickIndex % modNum;
        control[curIndex].style.backgroundColor = controlColor;
    }

    arrL[arrIdx].onclick = function () {
        control[curIndex].style.backgroundColor = "";
        if (!clickIndex) {
            console.log('索引到0了');
            clickIndex = safeIndex;
        }
        clickIndex--;
        setImgPos();
        setControlPos();
    };
    arrR[arrIdx].onclick = function () {
        control[curIndex].style.backgroundColor = "";
        clickIndex++;
        setImgPos();
        setControlPos();
    };

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

}
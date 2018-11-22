//transitionend版本，控制点击频率，用setTimeout配合标记
//问题在于如果在最后一张图位置，瞬间点击两次，会卡到首图去，除非加个适当的延时，
//或者在transitionend那儿加个判断，符合条件点了才会生效，但是效果也不太好

//控制点击频率方法：1.用setTimeout配合标记
//2.不用setTimeout只用一个标记，这个标记的true和false在点击事件和transitionend事件中进行开关和判断
//点击事件中如果开关状态不满足条件，就return退出整个click方法

var wrap1 = document.getElementsByClassName("Wrap1")[0];

var imgul = document.getElementsByClassName("imgul");
var imgli = imgul[0].getElementsByClassName('imgli');

var controlWrap = document.getElementsByClassName("controlWrap")[0];

var control = controlWrap.getElementsByClassName('control');

var arrL = document.getElementsByClassName("arrowL"),
    arrR = document.getElementsByClassName("arrowR");

var clickIndex = 601;

var curIndex = 101;
var dotIndex = 0;


var canClick = true;
var clickTimer = null;

/*关键点*/
//加上这个变化后，轮播图快速点击也不会出现回撤效果了，就像淘宝那样
/*imgul[0].style.transition = "none";||imgul[0].style.left = -500 * (imgli.length - 1) + "px"; //第一步操作
imgul[0].style.left = 0;
setTimeout(function){
    恢复动画，序号改变
    图片位置运动
},16)
必须延时进行后续动作，不然附上transition是瞬间生效，这样第一步操作就会带动画了，不是期望效果

在5后面再加个1，画画图感受下，就没必要这个该死的延迟效果了，但是快速点会有问题

多加一张图就可以了，参考这个视频学习
https://ke.qq.com/webcourse/index.html#cid=315961&term_id=100375002&taid=2738209155240505&vid=f14294y0wx9
*/

//上轮播
slideFunction(clickIndex, curIndex, 6, imgul, control, "orangered", 0, 2001);








var timerID = setInterval(function(){arrR[0].click()},2000);

wrap1.onmouseover = function () {
    console.log("定时器停下");
    clearInterval(timerID);
};

wrap1.onmouseout = function () {
    console.log("定时器开始");
    timerID = setInterval(function(){arrR[0].click()},2000);
}

function slideFunction(clickIndex, curIndex, modNum, imgul, control, controlColor, arrIdx, safeIndex) {
    setImgPos();
    setControlPos();
    controlEvent();

    console.log(`curIndex:${curIndex}`);
    console.log("现在的点索引"+dotIndex);

    function setImgPos() {
        curIndex = clickIndex % modNum;
        imgul[0].style.left = -500 * curIndex + "px";
    }

    function setControlPos() {
        switch (curIndex) {
            case 0:
                dotIndex = control.length - 1;
                break;
            case 1:
            case 2:
            case 3:
            case 4:
                dotIndex = curIndex - 1;
                break;
            case 5:
                dotIndex = 0;
                break;
        }
        for (let i = 0; i < control.length; i++) {
            control[i].style.backgroundColor = "";
        }
        control[dotIndex].style.backgroundColor = controlColor;
    }

    arrL[arrIdx].onclick = function () {
        if (canClick) {
                imgul[0].style.transition = "";
                if (!clickIndex) {
                    //console.log('索引到0了');
                    clickIndex = safeIndex;
                }
                clickIndex--;
                setImgPos();
                setControlPos();
            canClick = false;
            clickTimer = setTimeout(function () {
                canClick = true;
                clearTimeout(clickTimer);
            },100)
        }
    };
    arrR[arrIdx].onclick = function () {
        if (canClick) {
                imgul[0].style.transition = "";
                clickIndex++;
                setImgPos();
                setControlPos();
            console.log("我是点击，我触发");
            if (imgul[0].addEventListener) {
                console.log("绑了事件");
            }
                
                canClick = false;
            clickTimer = setTimeout(function () {
                canClick = true;
                clearTimeout(clickTimer);
            },100)
        }
    };

    imgul[0].addEventListener("transitionend", function () {
        //    console.log("过渡结束");
            if (curIndex == imgli.length - 1) {
                //       console.log("过渡到最后一张了，开始瞬移");
                imgul[0].style.transition = "none";
                imgul[0].style.left = -500 * 1 + "px";

                clickIndex += 2;
                console.log("我是过渡，我触发");
            }
            if (curIndex == 0) {
                //       console.log("过渡到第一张了，开始瞬移");
                imgul[0].style.transition = "none";
                imgul[0].style.left = -500 * (
                    imgli.length - 2) + "px";
                clickIndex -= 2;
            }
    });

    function controlEvent() {
        for (var i = 0; i < control.length; i++) {
            control[i].index = i;
            control[i].onclick = function () {
                    imgul[0].style.transition = "none";
                    imgul[0].style.left = -500 * (
                        imgli.length - 1) + "px";
                    console.log("正常来");
                    clickIndex = this.index + 1;
                    imgul[0].style.transition = "";
                    console.log("获取的索引值1:" + clickIndex);
                    setImgPos();
                    setControlPos();
            }
        }
    }

}





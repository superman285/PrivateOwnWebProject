//无transitionend版本，完全看用户点击速度，还算流畅
//核心是点击时的特殊操作，不用transitionend避免点击速度快于过渡速度
//点击后立马去掉动画瞬间跳转，然后加个延时后加动画与设置位置

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

var clickRightFlag = true;

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


var timerID = setInterval(function () {
    arrR[0].click()
}, 2000);

wrap1.onmouseover = function () {
    console.log("定时器停下");
    clearInterval(timerID);
};

wrap1.onmouseout = function () {
    console.log("定时器开始");
    timerID = setInterval(function () {
        arrR[0].click()
    }, 2000);
}


function slideFunction(clickIndex, curIndex, modNum, imgul, control, controlColor, arrIdx, safeIndex) {
    setImgPos();
    setControlPos();
    controlEvent();

    console.log(`curIndex:${curIndex}`);
    console.log("现在的点索引" + dotIndex);

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
        if (curIndex==0) {
            imgul[0].style.transition = "none";
            imgul[0].style.left = -500 * 4 + "px";
            clickIndex -= 3;
            clickTimer =
                setTimeout(function () {
                    imgul[0].style.transition = "";
                    if (!clickIndex) {
                        //     console.log('索引到0了');
                        clickIndex = safeIndex;
                    }
                    setImgPos();
                    setControlPos();
                    console.log("curIndex:"+curIndex);
                    clearTimeout(clickTimer);
                },20)
        }else {
            imgul[0].style.transition = "";
            if (!clickIndex) {
                //     console.log('索引到0了');
                clickIndex = safeIndex;
            }
            clickIndex--;
            setImgPos();
            setControlPos();
        }
    };
    arrR[arrIdx].onclick = function () {
            if (curIndex==imgli.length-1) {
                imgul[0].style.transition = "none";
                imgul[0].style.left = -500 * 1 + "px";
                clickIndex += 3;
            clickTimer =
                setTimeout(function () {
                imgul[0].style.transition = "";
                setImgPos();
                setControlPos();
                console.log("curIndex:"+curIndex);
                clearTimeout(clickTimer);
            },20)
            }else {
                imgul[0].style.transition = "";
                clickIndex++;
                setImgPos();
                setControlPos();
                console.log("curIndex:"+curIndex);
            }
    };

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
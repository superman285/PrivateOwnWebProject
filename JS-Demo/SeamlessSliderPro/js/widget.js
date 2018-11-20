var wrap1 = document.getElementsByClassName("Wrap1")[0];

var imgul = document.getElementsByClassName("imgul");
var imgli = imgul[0].getElementsByClassName('imgli');

var controlWrap = document.getElementsByClassName("controlWrap")[0];

var control = controlWrap.getElementsByClassName('control');

var arrL = document.getElementsByClassName("arrowL"),
    arrR = document.getElementsByClassName("arrowR");

var clickIndex = 2001;

var curIndex = 0;
var dotIndex = 0;

var clickRightFlag = true;

//轮播
slideFunction(clickIndex, curIndex, 5, imgul, control, "orangered", 0, 2001);

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

    function setImgPos() {
        curIndex = clickIndex % modNum;
        imgul[0].style.left = -500 * curIndex + "px";
    }

    function setControlPos() {
        dotIndex = curIndex > 0 ? curIndex - 1 : 3;
        //大清洗
        for (let i = 0; i < control.length; i++) {
            control[i].style.backgroundColor = "";
        }
        control[dotIndex].style.backgroundColor = controlColor;
    }

    arrL[arrIdx].onclick = function () {
        clickRightFlag = false;
        if (clickIndex % modNum === 0) {
            //在第一张时
            imgul[0].style.transition = "none";
            imgul[0].style.left = -500 * (imgli.length - 1) + "px";
            clickIndex--;
        }
        //加个延时解决到尽头或第一张时反向操作问题
        setTimeout(function () {
            dotIndex = curIndex > 0 ? curIndex - 1 : 3;
            control[dotIndex].style.backgroundColor = "";
            imgul[0].style.transition = "";
            if (!clickIndex) {
                //     console.log('索引到0了，需要初始化一下');
                clickIndex = safeIndex;
            }
            clickIndex--;
            setImgPos();
            setControlPos();
        }, 16);
    };
    arrR[arrIdx].onclick = function () {
        clickRightFlag = true;
        if (clickIndex % modNum === 4) {
            imgul[0].style.transition = "none";
            imgul[0].style.left = 0;
            clickIndex++;
        }
        //加个延时解决到尽头或第一张时反向操作问题
        setTimeout(function () {
            dotIndex = curIndex > 0 ? curIndex - 1 : 3;
            control[dotIndex].style.backgroundColor = "";
            imgul[0].style.transition = "";
            clickIndex++;
            setImgPos();
            setControlPos();
        }, 16);
    };

    imgul[0].addEventListener("transitionend", function () {
        //➡️右点击判断,判断索引为最后一张
        if (clickRightFlag) {
            if (curIndex === imgli.length - 1) {
                //       console.log("最后一张过渡结束");
                imgul[0].style.transition = "none";
                imgul[0].style.left = 0;
                clickIndex++;
            }
        } else {
            //⬅️左点击判断，判断索引为第一张
            if (curIndex === 0) {
                //       console.log("过渡到第一张");
                imgul[0].style.transition = "none";
                imgul[0].style.left = -500 * (
                    imgli.length - 1) + "px";
                clickIndex--;
            }
        }
    });

    //绑定底部点 点击事件
    function controlEvent() {
        for (var i = 0; i < control.length; i++) {
            control[i].index = i;
            control[i].onclick = function () {
                if (clickIndex % modNum == 0) {
                    imgul[0].style.transition = "none";
                    imgul[0].style.left = -500 * (
                        imgli.length - 1) + "px";
                }
                clickIndex = this.index + 1;
                setTimeout(function () {
                    imgul[0].style.transition = "";
                    console.log("获取的索引值1:" + clickIndex);
                    setImgPos();
                    setControlPos();
                }, 16)
            }
        }
    }

}
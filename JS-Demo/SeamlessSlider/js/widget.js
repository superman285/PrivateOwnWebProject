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

var clickIndex = 2001;
var clickIndex2 = 600;

var curIndex = 0;
var curIndex2 = 0;
var dotIndex = 0;

var clickRightFlag = true;


/*关键点*/
//加上这个变化后，轮播图快速点击也不会出现回撤效果了，就像淘宝那样
/*imgul[0].style.transition = "none";||imgul[0].style.left = -500 * (imgli.length - 1) + "px"; //第一步操作
imgul[0].style.left = 0;
setTimeout(function){
    恢复动画，序号改变
    图片位置运动
},16)
必须延时进行后续动作，不然附上transition是瞬间生效，这样第一步操作就会带动画了，不是期望效果

在5后面再加个1，画画图感受下，就没必要这个该死的延迟效果了

多加一张图就可以了，参考这个视频学习
https://ke.qq.com/webcourse/index.html#cid=315961&term_id=100375002&taid=2738209155240505&vid=f14294y0wx9
*/


//上轮播
slideFunction(clickIndex, curIndex, 5, imgul, control, "orangered", 0, 2001);
//下轮播
slideFunction(clickIndex2, curIndex2, 6, imgul2, control2, "black", 1, 600);



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
        for (let i = 0; i < control.length; i++) {
            control[i].style.backgroundColor = "";
        }
        control[dotIndex].style.backgroundColor = controlColor;
    }

    arrL[arrIdx].onclick = function () {
        clickRightFlag = false;
        if (clickIndex % modNum == 0) {
            //在第一张时
            //这个bug要处理，到最后一张或者第一张时，点相反箭头，会跳到第一张或最后的同一张图
            imgul[0].style.transition = "none";
            imgul[0].style.left = -500 * (
                imgli.length - 1) + "px";
            ;
            clickIndex--;
        }
        setTimeout(function () {
            dotIndex = curIndex > 0 ? curIndex - 1 : 3;
            control[dotIndex].style.backgroundColor = "";
            imgul[0].style.transition = "";
            if (!clickIndex) {
                //     console.log('索引到0了');
                clickIndex = safeIndex;
            }
            clickIndex--;
            setImgPos();
            setControlPos();
        }, 16);
    };
    arrR[arrIdx].onclick = function () {
        clickRightFlag = true;
        if (clickIndex % modNum == 4) {
            //        console.log("打印下4");在最后一张时
            //这个bug要处理，到最后一张或者第一张时，点相反箭头，会跳到第一张或最后的同一张图
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
        //    console.log("过渡结束");
        //➡️右点击判断,判断索引为最后一张
        if (clickRightFlag) {
            if (curIndex == imgli.length - 1) {
                //       console.log("最后一张过渡结束");
                imgul[0].style.transition = "none";
                imgul[0].style.left = 0;
                //这一步是关键，如果只是动了位置，不动索引，由于setTimeout的原因，会在最左边第一张图位置多停一张图的时间，
                //索引改变相当于一下跳过一张图，就不会多停顿时间，不明白的话停下定时器，自己手动点击就明白了，会发现点击后仍然为同一张图
                clickIndex++;
            }
        } else {
            //⬅️点击判断，判断索引为第一张
            if (curIndex == 0) {
                //       console.log("过渡到第一张");
                imgul[0].style.transition = "none";
                imgul[0].style.left = -500 * (
                    imgli.length - 1) + "px";
                clickIndex--;
            }
        }
    });


    function controlEvent() {
        for (var i = 0; i < control.length; i++) {
            control[i].index = i;
            control[i].onclick = function () {

                if (clickIndex % modNum == 0) {
                    imgul[0].style.transition = "none";
                    imgul[0].style.left = -500 * (
                        imgli.length - 1) + "px";
                    //当点到了最后，其实是在第一张位置，点击第三个点时，先瞬间无动画跳到最后一张，
                    //然后再延时一些进行动画，不然跳到最后一张也会带上动画了，其实只想最后一张到倒数第二张有动画
                    clickIndex = this.index + 1;
                    setTimeout(function () {
                        imgul[0].style.transition = "";
                        console.log("获取的索引值1:" + clickIndex);
                        setImgPos();
                        setControlPos();
                    }, 16)
                } else {
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

}
let wrap1 = $('.Wrap1').eq(0);
console.log("wrap1",wrap1);

let imgul = $('.imgul');
let imgli = $('.imgli');

let controlWrap = $(".controlWrap").eq(0);

let control = $('.control');

let arrL = $(".arrowL"),
    arrR = $(".arrowR");

let clickIndex = 2001;

let curIndex = 0;
let dotIndex = 0;

let clickRightFlag = true;


//轮播
slideFunction(clickIndex, curIndex, 5, imgul, control, "orangered", 0, 2001);

let timerID = setInterval(function(){arrR.eq(0).click()},2000);

wrap1.mouseover(function () {
    clearInterval(timerID);
});

wrap1.mouseout(function () {
    timerID = setInterval(function(){arrR.eq(0).click()},2000);
});

//用户暂离页面时停掉页面
document.addEventListener('visibilitychange',()=>{
    console.log('用户暂离状态:',document.hidden);
    if (document.hidden) {
        clearInterval(timerID);
    }else{
        timerID = setInterval(function(){arrR.eq(0).click()},2000);
    }
})


function slideFunction(clickIndex, curIndex, modNum, imgul, control, controlColor, arrIdx, safeIndex) {
    setImgPos();
    setControlPos();
    controlEvent();

    function setImgPos() {
        curIndex = clickIndex % modNum;
        imgul.eq(0).css("left",-500 * curIndex + "px");
    }

    function setControlPos() {
        dotIndex = curIndex > 0 ? curIndex - 1 : 3;
        /*for (let i = 0; i < control.length; i++) {
            control.eq(i).css("background","");
        }*/ //循环变为map
        control.map(idx=>{
            control.eq(idx).css('background',"");
        });
        control.eq(dotIndex).css("background",controlColor);
    }

    arrL.eq(arrIdx).click(function () {
        clickRightFlag = false;
        if (clickIndex % modNum === 0) {
            imgul.eq(0).css("transition","none");
            imgul.eq(0).css("left", -500 * (imgli.length - 1) + "px");
            clickIndex--;
        }
        setTimeout(function () {
            dotIndex = curIndex > 0 ? curIndex - 1 : 3;
            control.eq(dotIndex).css("background","");
            imgul.eq(0).css("transition","");
            if (!clickIndex) {
                clickIndex = safeIndex;
            }
            clickIndex--;
            setImgPos();
            setControlPos();
        }, 16);
    })
    arrR.eq(arrIdx).click(function () {
        clickRightFlag = true;
        if (clickIndex % modNum === 4) {
            imgul.eq(0).css("transition","none");
            imgul.eq(0).css("left", 0);
            clickIndex++;
        }
        setTimeout(function () {
            dotIndex = curIndex > 0 ? curIndex - 1 : 3;
            control.eq(dotIndex).css("background","");
            imgul.eq(0).css("transition","");
            clickIndex++;
            setImgPos();
            setControlPos();
        }, 16);
    })

    imgul.eq(0).on("transitionend", function () {
        //➡️右点击判断,判断索引为最后一张
        if (clickRightFlag) {
            if (curIndex === imgli.length - 1) {
                imgul.eq(0).css("transition","none");
                imgul.eq(0).css("left",0);
                clickIndex++;
            }
        } else {
            //⬅️左点击判断，判断索引为第一张
            if (curIndex === 0) {
                imgul.eq(0).css("transition","none");
                imgul.eq(0).css("left", -500 * (
                    imgli.length - 1) + "px");
                clickIndex--;
            }
        }
    });
    //绑定底部点 点击事件
    function controlEvent() {
        for (let i = 0; i < control.length; i++) {
            //control.eq(i)[0].index = i;
            control.eq(i).click(function () {
                if (clickIndex % modNum == 0) {
                    imgul.eq(0).css("transition","none");
                    imgul.eq(0).css("left",-500 * (
                        imgli.length - 1) + "px");
                }
                //clickIndex = this.index + 1;
                clickIndex = i + 1; //循环用let没那个问题
                setTimeout(function () {
                    imgul.eq(0).css("transition","");
                    setImgPos();
                    setControlPos();
                }, 16)
            })
        }
    }

}
var groupWrap1 = document.querySelector(".group1Wrap"),
    groupWrap2 = document.querySelector(".group2Wrap"),
    groupWrap3 = document.querySelector(".group3Wrap");

var gUL1 = groupWrap1.querySelector("ul"),
    gUL2 = groupWrap2.querySelector("ul"),
    gUL3 = groupWrap3.querySelector("ul");

var glist1 = gUL1.getElementsByTagName("li"),
    glist2 = gUL2.getElementsByTagName("li"),
    glist3 = gUL3.getElementsByTagName("li");

var gTitle1 = groupWrap1.querySelector(".title"),
    gTitle2 = groupWrap2.querySelector(".title"),
    gTitle3 = groupWrap3.querySelector(".title");

var arrow1 = document.getElementsByClassName("arrow")[0],
    arrow2 = document.getElementsByClassName("arrow")[1],
    arrow3 = document.getElementsByClassName("arrow")[2];

var isExpand1 = false,
    isExpand2 = false,
    isExpand3 = false;

//给三个列表的title绑定事件
gTitle1.onclick = function () {
    if (!isExpand1) {
        if (isExpand3) {
            UL3_OFF();
            isExpand3 = false;
        }
        if (isExpand2) {
            UL2_OFF();
            isExpand3 = false;
        }
        UL1_ON();
        console.log(isExpand1);
        isExpand1 = true;
    } else {
        UL1_OFF();
        isExpand1 = false;
    }
    console.log(isExpand1);
};

gTitle2.onclick = function () {
    if (!isExpand2) {
        if (isExpand3) {
            UL3_OFF();
            isExpand3 = false;
        }
        if (isExpand1) {
            UL1_OFF();
            isExpand1 = false;
        }
        UL2_ON();
        isExpand2 = true;
    } else {
        UL2_OFF();
        isExpand2 = false;
    }
};

gTitle3.onclick = function () {
    if (!isExpand3) {
        if (isExpand2) {
            UL2_OFF();
            isExpand2 = false;
        }
        if (isExpand1) {
            UL1_OFF();
            isExpand1 = false;
        }
        UL3_ON();
        isExpand3 = true;
    } else {
        UL3_OFF();
        isExpand3 = false;
    }
};

//给每个li绑定点击事件
var temp1 = glist1[0],
    temp2 = glist2[0],
    temp3 = glist3[0];
for (var i = 0; i < glist1.length; i++) {
    glist1[i].onclick = function () {
        temp1.style.backgroundColor = "";
        this.style.backgroundColor = "#fff";
        temp1 = this;
    }
}
for (var i = 0; i < glist2.length; i++) {
    glist2[i].onclick = function () {
        temp2.style.backgroundColor = "";
        this.style.backgroundColor = "#fff";
        temp2 = this;
    }
}
for (var i = 0; i < glist3.length; i++) {
    glist3[i].onclick = function () {
        temp3.style.backgroundColor = "";
        this.style.backgroundColor = "#fff";
        temp3 = this;
    }
}

//三个列表的展开和收起
function UL1_ON() {
    console.log("我点了1,展开");
    gTitle1.style.backgroundColor = "#8393FF";
    arrow1.style.transform = "rotate(90deg)";
    groupWrap1.style.height = "370px";
}

function UL1_OFF() {
    console.log("我点了1,收起");
    gTitle1.style.backgroundColor = "#a0e0ff";
    arrow1.style.transform = "rotate(0deg)";
    groupWrap1.style.height = "50px";
    temp1.style.backgroundColor = "";
}

function UL2_ON() {
    console.log("我点了2,展开");
    gTitle2.style.backgroundColor = "#8393FF";
    arrow2.style.transform = "rotate(90deg)";
    groupWrap2.style.height = "290px";
}

function UL2_OFF() {
    console.log("我点了2,收起");
    gTitle2.style.backgroundColor = "#a0e0ff";
    arrow2.style.transform = "rotate(0deg)";
    groupWrap2.style.height = "50px";
    temp2.style.backgroundColor = "";
}

function UL3_ON() {
    console.log("我点了3,开");
    gTitle3.style.backgroundColor = "#8393FF";
    arrow3.style.transform = "rotate(90deg)";
    groupWrap3.style.height = "210px";
}

function UL3_OFF() {
    console.log("我点了3,关");
    gTitle3.style.backgroundColor = "#a0e0ff";
    arrow3.style.transform = "rotate(0deg)";
    groupWrap3.style.height = "50px";
    temp3.style.backgroundColor = "";
}
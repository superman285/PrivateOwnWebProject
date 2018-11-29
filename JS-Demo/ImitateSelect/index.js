var showBox = document.getElementsByClassName("show")[0],
    showTitle = document.getElementsByClassName("title")[0],
    fontList = document.getElementsByClassName("fontList")[0],
    fontItem = document.getElementsByClassName("fontItem");

//var firstFlag = true;

showTitle.onclick = function () {
    console.log("我点了啊");
    showBox.classList.add("expand");
};

document.onclick = function (e) {
    var clickPart = e.target.nodeName;
    if (clickPart === "BODY"|| clickPart === "HTML") {
        showBox.classList.remove("expand");
    } else {
        console.log("点击的部分是:"+clickPart);
    }
};

fontList.onclick = function (e) {
    console.dir(e);
    if(e.shiftKey){
        if (e.target.classList.contains("choose")) {
            console.log("已经选中，不再添加");
        }else {
            e.target.classList.add("choose");
            if (showTitle.innerHTML == "按住shift多选") {
                showTitle.innerHTML = e.target.innerHTML;
            } else {
                showTitle.innerHTML += "," + e.target.innerHTML;
            }
        }
    }else {
        for (var i = 0; i < fontItem.length; i++) {
            fontItem[i].classList.remove("choose");
        }
        e.target.classList.add("choose");
        showBox.classList.remove("expand");
        showTitle.innerHTML = e.target.innerHTML;
    }

};
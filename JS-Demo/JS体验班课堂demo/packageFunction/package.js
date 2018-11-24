function qs(_selected,_father) {


    if (typeof _selected !== "string") {
        alert("第一个参数类型应为string");
        return;
    }
    var firstChar = _selected.charAt(0);
    var father = _father||document;
    console.log(father);

    if (firstChar === "#") {
        if (_selected.length >= 2) {
            return document.getElementById(_selected.substring(1));
        } else {
            alert("参数有误")
        }
    } else if (firstChar === ".") {
        if (_selected.length >= 2) {
            return father.getElementsByClassName(_selected.substring(1));
        } else {
            alert("参数不对")
        }
    } else {
        return father.getElementsByTagName(_selected);
    }
}

var outer = qs(".outer",document.body);
var inner = qs("#inner",outer[0]);

var ht = qs("h1");
var p = qs("p",outer[0])

console.log(outer,inner,ht,p);


console.dir(p[0]);

var pStr = p[0].innerHTML;

var findInput = qs(".find")[0],
    replaceInputOld = qs(".replaceOld")[0],
    replaceInputNew = qs(".replaceNew")[0],
    findBtn = qs(".findBtn")[0],
    replaceBtn = qs(".replaceBtn")[0];

findBtn.onclick = function () {
    var findText = findInput.value;

    if(pStr.indexOf(findText)==-1){
        alert("没找到")
        return
    }
    p[0].innerHTML = pStr.split(findText).join("<span>"+ findText +"</span>");
    console.dir(p[0]);
}

replaceBtn.onclick = function () {
    var replaceOldText = replaceInputOld.value;
    var replaceNewText = replaceInputNew.value;

    if(pStr.indexOf(replaceOldText)==-1){
        alert("没找到替换的")
        return
    }
    if(replaceOldText===""){
        alert("还没输入呢")
        return
    }

    pStr = pStr.split(replaceOldText).join(replaceNewText);
    p[0].innerHTML = pStr;
    console.dir(pStr);
}



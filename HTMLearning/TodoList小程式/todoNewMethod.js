
var inputBox = document.querySelector(".todoInput");
var addBtn = document.querySelector(".todoAdd");
var todoUL = document.querySelector(".todoUL");
var delAllBtn = document.querySelector(".delAll");
var todoArray = [];

//新开浏览器初始化
updateList();

addBtn.addEventListener('click',AddTh,false);
todoUL.addEventListener('click',DelTh,false);
delAllBtn.addEventListener('click', deleteAll, false);

function deleteAll() {
    ULcontent = todoUL.innerHTML;
    //判断ULcontent!==""不生效，估计中间还有空格，所以围魏救赵了
    if (document.querySelector("li")) {
        //传统确认弹窗
        var confirmBox = confirm("确认清空所有待办事项嘛？");
        if (confirmBox) {
            //别忘了，此处不能用ULcontent，因为改了ULcontent根本不影响todoUL.innerHTML
            todoUL.innerHTML = "";
            localStorage.clear();
        }
    }
}
function AddTh(){
    saveToLS();
    updateList();
}

function DelTh(event){
    var confirmBox = confirm("确认删除嘛？");
    if(confirmBox) {
        removeFromLS(event);
        updateList();
    }
}

//包括增、删、首次加载
function updateList() {

    if(localStorage.length) {
        var liStr = "";
        var trueLength = JSON.parse(localStorage['todoArray']).length
        for (let i = 0; i < trueLength; i++) {
            liStr += "<li data-index='" + i + "'><button>删除</button>" + JSON.parse(localStorage['todoArray'])[i] + "</li>"
        }
        todoUL.innerHTML = liStr;
    }else{
        console.log("LS长度为空");
    }
}

function saveToLS() {
    //如果LS中存有数据
    if(localStorage.length){
    todoArray = JSON.parse(localStorage['todoArray']);}
    todoArray.push(inputBox.value);
    //todoArray[length] = inputBox.value;
    localStorage.setItem('todoArray',JSON.stringify(todoArray))
}

function removeFromLS(event) {
    if(event.target.nodeName!=="BUTTON"){
        console.log("不是button，没事发生");
        return;
    }
    todoArray = JSON.parse(localStorage['todoArray']);
    var temp_index = event.target.parentNode.dataset.index;
    todoArray.splice(temp_index, 1);
    localStorage.setItem('todoArray',JSON.stringify(todoArray))
}
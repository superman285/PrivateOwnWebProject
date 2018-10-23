/*作者：wuzhichong
没有引入外部数组，直接用0开始的数字作索引存到了localStorage，处理稍微麻烦了些
还可引入外部数组存每条待办，然后再把数组存入localStorage，处理可能稍微简单些，可以尝试
* */
var changeBtn = document.querySelector(".change");
var inputBox = document.querySelector(".todoInput");
var addBtn = document.querySelector(".todoAdd");
var todoUL = document.querySelector(".todoUL");
var inputData;
var delAllBtn = document.querySelector(".delAll");
//var ListSpan = document.querySelectorAll("li span");

//刷新浏览器，第一次开浏览器执行该方法；依据localStorage来初始化列表显示
initialList();
//inputBox.value = "";

//换背景
changeBtn.addEventListener('click', changeBG, false);
//加入待办
addBtn.addEventListener('click', addTodo, false);
//删除待办
todoUL.addEventListener('click', removeTodo, false);
//清空所有事件
delAllBtn.addEventListener('click', deleteAll, false);

/*for (let i = 0; i < localStorage; i++) {
    ListSpan[i].addEventListener('click', linethrough, false);
}*/
/*function linethrough() {
    console.log("span加餐");
    ListSpan.setAttribute("text-decoration", "line-through");
}*/

/*addBtn.addEventListener('click', updateList, false);
addBtn.addEventListener('click', saveToStorage, false);

todoUL.addEventListener('click', removeFromStorage, false);
todoUL.addEventListener('click', removeList, false);*/



//jqUI确认alert框
function jqUIalert(alertText) {
    $(function () {
        $("#dialog-alert p").text(alertText);
        $("#dialog-alert").dialog({
            modal: true,
            buttons: {
                OK: function () {
                    $(this).dialog("close");
                }
            }
        });
    });
}

//jqUI双选提示框
function jqUIconfirm(confirmText, callback) {
    $(function () {
        $("#dialog-confirm p").text(confirmText);
        $("#dialog-confirm").dialog({
            resizable: false,
            height: 200,
            modal: true,
            buttons: {
                "确定": function () {
                    $(this).dialog("close");
                    console.log("点击确定");
                    callback();//执行回调函数，即执行传入的函数名参数的函数
                    //callback.call(); 需要传参的时候使用callback.call
                },
                "取消": function () {
                    $(this).dialog("close");
                    console.log("点击取消");
                }
            }
        });
    });
}

function deleteAll() {
    ULcontent = todoUL.innerHTML;
    //判断ULcontent!==""不生效，估计中间还有空格，所以围魏救赵了
    if (document.querySelector("li")) {
        //传统确认弹窗
        /*var confirmBox = confirm("确认清空所有待办事项嘛？");
        if (confirmBox) {
            //别忘了，此处不能用ULcontent，因为改了ULcontent根本不影响todoUL.innerHTML
            todoUL.innerHTML = "";
            localStorage.clear();
        }*/
        //jqueryUI改造弹窗
        //异步操作，若写成var answer = jqUIconfirm("content");if(answer)...会等deleteAll完了才开始走jqUIconfirm函数体，

        //回调函数法，加箭头函数使用
        jqUIconfirm("确认清空所有待办事项嘛？", () => {
            todoUL.innerHTML = "";
            localStorage.clear();
        })
    } else {
        jqUIalert("待办列表空空如也！")
    }
}

function addTodo() {
    updateList();
    saveToStorage();
    //完成更新显示与存储两步操作后将输入框内容置空
    inputBox.value = "";
}

//别漏了事件参数event
function removeTodo(event) {
    if (event.target.nodeName !== "BUTTON") {
        console.log("点了非BUTTON");
        return;
    }
    /*var confirmBox = confirm("确认要删除该事项嘛？");
    if (confirmBox) {
        removeFromStorage(event);
        removeList(event);
    }*/
    //jqUI改造
    jqUIconfirm("确认要删除该事项嘛？", () => {
        removeFromStorage(event);
        removeList(event);
    })
}

//存的时候如果不是string格式的要转成json才能存到localStorage，这儿的方法直接当序号键值对存了而不是存数组，所以不用json化处理了
function saveToStorage() {
    if (inputBox.value) {
        //存储到localStorage
        inputData = inputBox.value;
        //inputData_json = JSON.stringify(inputData);
        localStorage.setItem(localStorage.length, inputData);
    }
}

//增加待办后更新列表
function updateList() {
    if (inputBox.value) {
        //li元素
        var todoLiNode = document.createElement('li');
        todoLiNode.setAttribute("data-index", localStorage.length);
        //删除按钮
        var deleteBtnNode = document.createElement('button');
        //deleteBtnNode.setAttribute("class", "delete");
        deleteBtnNode.setAttribute("class", "btnicon button button-large button-plain button-borderless");
        deleteBtnNode.setAttribute("data-index", localStorage.length);
        var deleteBtnImg = document.createElement("i");
        deleteBtnImg.setAttribute("class", "fa fa-trash-o blue");
        //分隔线
        var hrNode = document.createElement("hr");

        //deleteBtnNode.textContent = "删除事项";
        //删除按钮先于文字内容加到li节点上
        deleteBtnNode.appendChild(deleteBtnImg);
        todoLiNode.appendChild(deleteBtnNode);

        //文字内容节点加到li上
        var liSpanNode = document.createElement("span");
        liSpanNode.textContent = inputBox.value;
        todoLiNode.appendChild(liSpanNode);
        /*hr分隔线节点应当加到li上更好的
        todoLiNode.appendChild(hrNode);*/

        //li节点加到ul上
        todoUL.appendChild(todoLiNode);
        //加删除按钮到li里头
        //todoLiNode.textContent = inputBox.value;
        //加分隔线
        todoUL.appendChild(hrNode);

    } else {
        jqUIalert("输入内容不能为空！")
    }
}

function removeFromStorage(event) {

    //删除data-index位置的键值对数据，相当于写法event.target.getAttribute('data-index'),但是index在引号外以后处理更方便
    var tempIndex = event.target.dataset.index;
    //删除后要同步更新列表的data-index属性，不然后续再增加会出现问题

    //超级无敌大坑。。。localStorage处理过的变量有时候变成了string，代入作为参数时一定一定要转换成数字
    for (let index = tempIndex, len = localStorage.length - 1; index < len; index++) {
        localStorage.setItem(index, localStorage[parseInt(index) + 1]);
    }
    //把从index开始往后的所有key的值都往上挪一个，然后删最后一个key即可
    localStorage.removeItem(parseInt(localStorage.length) - 1);
}

//删除待办后更新列表
function removeList(event) {
    //切记删除后要更新索引

    //此处一个错误，一定要先删除相邻元素再删除li元素，不然去哪找event.target啊晕。
    var line = (event.target).parentNode.nextElementSibling;
    //常用节点获取方式：
    // parentNode父节点，next/previousElementSibling兄弟节点，都不用匹配空格等，
    // children[i]也不用匹配空格，first/lastElementChild也不用匹配空格
	//通过dataset访问属性data-index;=>dataset.index
    var temp_data_index = event.target.dataset.index;
    console.log(event.target);
    console.log(line);

    //删除图钮不是UL的子节点而是孙节点，是li的子节点，li是ul的子节点
    todoUL.removeChild(line);
    todoUL.removeChild(event.target.parentNode);
    //jqUIalert("已删除！");
    //更新list的data-index
    var updateListNode = document.querySelectorAll("li");
    var upDelBtnNode = document.querySelector(".btnicon");
    for (let i = temp_data_index, len = localStorage.length; i < len; i++) {
        updateListNode[i].setAttribute("data-index", i);
        upDelBtnNode[i].setAttribute("data-index", i);
    }
}

//重新加载页面时初始化列表
function initialList() {
    console.log("初始化list");
    if (localStorage.length) {
        //这个length是最新length，但是当时最大length可不是这个，不能用这个，怎么办，不知道最终索引值的for循环，
        //更好的写法，不用每次都求localStorage.length
        for (let index = 0, len = localStorage.length; index < len; index++) {
            //for (let value of localStorage){
            var initListNode = document.createElement('li');
            var initDeleteBtnNode = document.createElement('button');
            var initHrNode = document.createElement("hr");
            //或localStorage.getItem(index),得索引index处有值才可以赋，不可以直接从0开始+1+1地叠加
            if (localStorage[index]) {
                //加删除按钮到li里头
                initDeleteBtnNode.setAttribute("class", "btnicon button button-large button-plain button-borderless");
                initDeleteBtnNode.setAttribute("data-index", index);
                var initDeleteBtnImg = document.createElement("i");
                initDeleteBtnImg.setAttribute("class", "fa fa-trash-o blue");
                //图片子节点i加到按钮中
                initDeleteBtnNode.appendChild(initDeleteBtnImg);
                initListNode.appendChild(initDeleteBtnNode);

                //加备忘文字内容到span，加span到li
                var initliSpanNode = document.createElement("span");
                initliSpanNode.textContent = localStorage[index];
                initListNode.appendChild(initliSpanNode);
                initListNode.setAttribute("data-index", index);
                todoUL.appendChild(initListNode);


                //加分隔线
                todoUL.appendChild(initHrNode);
            }
        }
    } else {
        console.log("localStorage中空空如也！");
    }
}

function changeBG() {
    var bbody = document.body;
    var rand = Math.random();
    console.log("开始换背景");
    switch (true) {
        case (rand <= 0.2):
            console.log("开始换背景1");
            bbody.setAttribute('style', 'background:url("img/bg1.jpg")');
            //写法2：bbody.style.background="url('img/bg1.jpg')"
            break;
        case (rand <= 0.4 && rand > 0.2):
            console.log("开始换背景2");
            bbody.setAttribute('style', 'background:url("img/bg2.jpg") center no-repeat');
            break;
        case (rand <= 0.6 && rand > 0.4):
            console.log("开始换背景3");
            bbody.setAttribute('style', 'background:url("img/bg3.jpg")');
            break;
        case (rand <= 0.8 && rand > 0.6):
            console.log("开始换背景4");
            bbody.setAttribute('style', 'background:url("img/bg4.jpg")');
            break;
        default:
            console.log("开始换背景5");
            bbody.setAttribute('style', 'background:url("img/bg5.jpg")');
    }
}

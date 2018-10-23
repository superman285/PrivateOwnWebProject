

var inputBox = document.querySelector(".todoInput");
var addBtn = document.querySelector(".todoAdd");
var todoUL = document.querySelector(".todoUL");
var liArray = [];

var inputData;
var inputData_json;

addBtn.addEventListener('click',updateList,false);
todoUL.addEventListener('click',removeList,false);


function addToList(){

    if(inputBox.value){
        //存储到localStorage
        inputData = inputBox.value;
        inputData_json = JSON.stringify(inputData);
        localStorage.setItem('a',inputData_json)
    }
}

function updateList(){
    //li元素
    var todoLiNode = document.createElement('li');
    //删除按钮
    var deleteBtnNode = document.createElement('button');
    deleteBtnNode.setAttribute("class","delete");
    //分隔线
    var hrNode = document.createElement("hr");

    if(inputBox.value) {
        todoLiNode.textContent = inputBox.value;
        todoUL.appendChild(todoLiNode);
        
        //加删除按钮到li里头
        deleteBtnNode.textContent = "删除事项";
        todoLiNode.appendChild(deleteBtnNode);

        //加分隔线
        todoUL.appendChild(hrNode);

    }else{
        alert("输入内容不能为空！")
    }
}

function removeList(event){

    if(event.target.nodeName!=="LI"){
        console.log("点了非LI");
        return;
    }

    var confirmBox = confirm("确认要删除该事项嘛？");
    if(confirmBox){
        //此处一个错误，一定要先删除相邻元素再删除li元素，不然去哪找event.target啊晕。
        var line = (event.target).nextElementSibling;
        console.log(event.target);
        console.log(line);
        todoUL.removeChild(line);
        todoUL.removeChild(event.target);
        alert("已删除！");
    }else{
        alert("事项未删除！");
    }





}
































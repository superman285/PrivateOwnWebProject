

var faceSwitch = document.querySelector(".imgSwitch"),
    input = document.querySelector(".input"),
    sendBtn = document.querySelector(".sendBtn"),
    chatList = document.querySelector(".chatList");
var inputText = input.value;
var faceSmile = true;


//切换表情
faceSwitch.onclick = function(){
    console.log(666);
    if(faceSmile){
        faceSwitch.src = "img/2.jpg";
    }else {
        faceSwitch.src = "img/1.jpg";
    }
    faceSmile = !faceSmile;
    input.value = "";
};

sendBtn.onmousedown = function(){
    inputText = input.value;
    if(inputText) {
        sendBtn.classList.add('clickdown');
        if(faceSmile) {
            chatList.innerHTML += "<li class='left'>\n" +
                "<input type='text' value='" + inputText + "'>\n" +
                "<img src='img/1.jpg' alt=''>\n" +
                "</li>"
        }else {
            chatList.innerHTML += "<li class='right'>\n" +
                "<input type='text' value='" + inputText + "'>\n" +
                "<img src='img/2.jpg' alt=''>\n" +
                "</li>"
        }
    }
};
sendBtn.onmouseup = function () {
    sendBtn.classList.remove('clickdown');
};


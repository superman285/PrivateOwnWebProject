
/*DOM章节*/
//1.
var firstId;
firstId = document.querySelector('#first');
var secondClass;
secondClass = document.querySelector('.second');
var allClass;
allClass = document.querySelectorAll('.all');

//2.
var googleSite;
googleSite = document.querySelector("#google");
googleSite.setAttribute('href','www.google.com');

//3.
var hexSchoolSite = document.querySelector("#hexSchool");
hexSchoolSite.innerHTML = '<a href="http://www.hexschool.com/">Go to Hexschool</a>';

//4.
var sonElement = document.createElement("a");
sonElement.setAttribute("href", "www.facebook.com");
sonElement.textContent = "前往Facebook";

var fatherElement = document.querySelector("#link");
fatherElement.appendChild(sonElement);

//5.中题
var students = [
    {
        name: "小明",
        age: "18",
        phone: "0912345678"
    },
    {
        name: "小美",
        age: "17",
        phone: "0923456789"
    },
    {
        name: "小菜",
        age: "19",
        phone: "0934567891"
    }
];

var studentList = document.querySelector("#studentList");

for (let i = 0; i < students.length; i++) {
    //createElement写法
    var studentNode = document.createElement("li");
    studentNode.textContent = students[i].name + "，" + students[i].age + "歲，手機號碼是" + students[i].phone;
    studentList.appendChild(studentNode);

    //innerHTML写法
    //studentList.innerHTML += "<li>" + students[i].name + students[i].age + "歲,手機號碼" + students[i].phone + "</li>";

}

btn.addEventListener("onclilck",function () {

})


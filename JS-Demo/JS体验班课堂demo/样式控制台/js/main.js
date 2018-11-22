

var btn_red = document.querySelector(".red"),
    btn_yellow = document.getElementsByClassName("yellow")[0],
    btn_blue = document.getElementsByClassName("blue")[0],
    btn_w2 = document.getElementsByClassName("w2")[0],
    btn_w3 = document.getElementsByClassName("w3")[0],
    btn_w4 = document.getElementsByClassName("w4")[0],
    btn_h2 = document.getElementsByClassName("h2")[0],
    btn_h3 = document.getElementsByClassName("h3")[0],
    btn_h4 = document.getElementsByClassName("h4")[0];

var btn_revert = document.getElementById("revert"),
    btn_confirm = document.getElementById("confirm");

var showBox = document.getElementsByClassName("show")[0];

var control = document.getElementsByClassName("controlSet")[0];
var control_arrow = document.getElementsByClassName("controlSet-arrow")[0];

btn_red.onclick = function () {
    showBox.style.backgroundColor = 'orangered';
    console.log('red');
};
btn_yellow.onclick = function () {
    showBox.style.backgroundColor = '#ffec51';
    console.log('yellow');
};
btn_blue.onclick = function () {
    showBox.style.backgroundColor = 'deepskyblue';
    console.log('blue');
};

btn_w2.onclick = function () {
    showBox.style.width = '200px';
};
btn_w3.onclick = function () {
    showBox.style.width = '300px';
};
btn_w4.onclick = function () {
    showBox.style.width = '400px';
};

btn_h2.onclick = function () {
    showBox.style.height = '200px';
};
btn_h3.onclick = function () {
    showBox.style.height = '300px';
};
btn_h4.onclick = function () {
    showBox.style.height = '400px';
};

btn_revert.onclick = function () {
    showBox.style.backgroundColor = 'white';
    showBox.style.width = '200px';
    showBox.style.height = '200px';
};

btn_confirm.onclick = function () {
    control.style.opacity = 0;
    control.style.width = 0;
    control_arrow.style.opacity = 1;
    control_arrow.style.zIndex = 2;
};
control_arrow.onclick = function () {
    control.style.width = '550px';
    control.style.opacity = 1;
    control_arrow.style.opacity = 0;
    control_arrow.style.zIndex = 1;
};
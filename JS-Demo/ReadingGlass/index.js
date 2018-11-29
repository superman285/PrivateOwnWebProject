var smallPic = document.getElementsByClassName("smallPic")[0],
    bigShow = document.getElementsByClassName("bigShow")[0],
    mask = document.getElementsByClassName("mask")[0];


smallPic.onmousemove = function (e) {
    mask.style.display = "block";
    mask.style.top = e.clientY - mask.offsetHeight/2 + 'px';
    mask.style.left = e.clientX - mask.offsetWidth/2 + 'px';

    bigShow.style.backgroundPositionX = (0-e.clientX)*1.5 +50 + 'px';
    bigShow.style.backgroundPositionY = (0-e.clientY)*1.3 +100 + 'px';

};
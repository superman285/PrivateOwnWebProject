var num = [];

for (let i = 1; i < 10; i++) {
    num[i] = document.querySelector(`.n${i}`);

        num[i].onclick = function () {
            // num[i].style.top += "20px";
            console.log(`element${i}:`);
            console.log(`top:${window.getComputedStyle(num[i]).top}`);
            console.log(`left:${window.getComputedStyle(num[i]).left}`);

            console.log();
            console.log(`left:${window.getComputedStyle(num[i]).left.substring(0, window.getComputedStyle(num[i]).left.length - 2)}`);

            judge(i);
        }

}

function judge(i){

    var numhidden_top = window.getComputedStyle(num[9]).top;
    var numhidden_left = window.getComputedStyle(num[9]).left;
    var nht_num = +numhidden_top.substring(0,numhidden_top.length-2);
    var nhl_num = +numhidden_left.substring(0,numhidden_left.length-2);


    var num_top = window.getComputedStyle(num[i]).top;
    var num_left = window.getComputedStyle(num[i]).left;
    var nt_num = +num_top.substring(0,num_top.length-2);
    var nl_num = +num_left.substring(0,num_left.length-2);


    console.log('judge:::::');
    console.log('numtop:'+num_top);
    console.log('numleft:'+num_left);
    console.log('ntnum:'+nt_num);
    console.log('nlnum:'+nl_num);
    //以下情况
    if ((Math.abs(nt_num - nht_num) === 150 && nl_num === nhl_num && nt_num <= 300 && nt_num >= 0)
        || (Math.abs(nl_num - nhl_num) === 150 && nt_num === nht_num && nl_num <= 300 && nl_num >= 0)) {

        console.log('this block can move');

        //numhidden_top,num_top = num_top,numhidden_top;
        //numhidden_left,num_left = num_left,numhidden_left;

        num[i].style.top = numhidden_top;
        num[i].style.left = numhidden_left;

        num[9].style.top = num_top;
        num[9].style.left = num_left;


    }else {
        console.log('nonono');
    }


}

var refresh_btn = document.querySelector("#refresh");
refresh_btn.onclick = function () {
    num[1].style.top = '0';
    num[2].style.top = '0';
    num[3].style.top = '0';
    num[4].style.top = '150px';
    num[5].style.top = '150px';
    num[6].style.top = '150px';
    num[7].style.top = '300px';
    num[8].style.top = '300px';
    num[9].style.top = '300px';

    num[1].style.left = '0';
    num[4].style.left = '0';
    num[7].style.left = '0';
    num[2].style.left = '150px';
    num[5].style.left = '150px';
    num[8].style.left = '150px';
    num[3].style.left = '300px';
    num[6].style.left = '300px';
    num[9].style.left = '300px';

    console.log(num[1].style.top,num[2].style.top,num[3].style.top);

}
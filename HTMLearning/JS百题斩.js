var num = 0;
function numAdd(num1,num2) {
   num+=2; 
}
numAdd()
numAdd()
console.log(num);

var home = {
    father:'tom',
    checkLock:function () {
        console.log('lock');

    }
}
home.checkLock();

var ary = ['tom',3,{str:'hi',}]
console.log(ary);
console.log(typeof(ary[2]));

switch (true) {
    case 1<2:
        console.log(true);;
        break;
    case 1>2:
        console.log(false);;
        break;
    default:
        console.log("defa");;
}
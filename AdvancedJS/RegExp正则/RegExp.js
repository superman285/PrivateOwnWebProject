/*
* 需求：从字符串中找出数字并打印出来，而且数字位数要保留，不是每次都找1位
* */

let str = "asfad07fsfa889saf909dfd98fsdqw7890xcx13"
let result = [];

//普通方法
function findNum(str) {
    var temp = "";
    for (let i = 0; i < str.length; i++) {
        let v = parseInt(str.charAt(i)); //不用number，碰到空格或空字符串会转成0
        if (!isNaN(v)) {
            temp += v;
        }else {
            if (temp) {
                result.push(temp);
                temp = "";
            }
        }
    }
    if(temp){
       result.push(temp);
    }
    console.log(result);
}
findNum(str);

//正则方法
let findReg = /\d+/g;
console.log(str.match(findReg));


let testString = "winner,win7,win8,win10,wing"
console.log();

/*断言后面跟着数字，但是匹配结果排除后面跟着的数字，即不替换数字*/
console.log(testString.replace(/win(?=\d)/g,"视窗"));
console.log(testString.match(/win(?!\d)/g));

//console.dir(testString.match(/(?:win)/));


/*匹配到了结果但不生成详情数组*/
console.dir("abcde123".match(/(ab)(?<small>c)d/g));
/*报错，因为没生成详情数组*/
//console.dir("abcde123".match(/(ab)(?<small>c)d/g).groups.small);

/*匹配到了结果且生成详情数组*/
console.dir("abcde123".match(/(ab)(?<small>c)d/));
console.dir("abcde123".match(/(ab)(?<small>c)d/).groups.small);


//实战来啦！！！

console.log('----------实战-----------');
//QQ邮箱

let QQMailReg = /^[1-9]\d{4,9}@qq.com$/;

let strq1 = "0248123@qq.com"
let strq2 = "123123131211312312323@qq.com"

console.log(QQMailReg.test(strq1));
console.log(QQMailReg.test(strq2));

//一般邮箱
let CommonMailReg = /^\w+@\w+(\.\w+)+$/;
let mail1 = "fsa4123lijf@gmail.com.cn"
let mail2 = "131@foxmail"
let mail3 = "131@foxmail.net"
let mail4 = "@foxmail.net"


console.log(CommonMailReg.test(mail1));
console.log(CommonMailReg.test(mail2));
console.log(CommonMailReg.test(mail3));
console.log(CommonMailReg.test(mail4));

//标签过滤
let htmlFilterReg = /^<html>|<\/html>$/g;
//类名部分如果出现了class则至少一个类名，后面的空格+类名出现0到n次，class="a1"或class="a1 a2"同理id名
let htmlFilterReg2 = /^<html( class='\w+(\s\w+)*')?( id='\w+')?>|^<html( class="\w+(\s\w+)*")?>|<\/html>$/g;
let htmlstr = "<html class='fix ce' id='abc'>我的字</html>"

var res = htmlstr.replace(htmlFilterReg2,"");
console.log(res);

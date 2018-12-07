

var reg = /a/;
var str = "abcde";


console.log(reg.test(str));


var str2 = "12312414123w3232";
var reg2 = /w/;
// \D代表非数字
var reg2s = /\D/;

//判断是否全是数字
//法一：
if(reg2.test(str2)){
    console.log("不全是数字");
}
//法二：
if(reg2s.test(str2)){
    console.log("不全是数字");
}

/*============*/
var str3 = "vahfa123jk123jk132"
var reg3 = new RegExp("\d","g");

console.log(str3.match(reg3));
console.log(str3.match(reg3));


//易错点
var str4 = "ccc";
var reg41 = /c+/g;
var reg42 = /c+/;
var reg43 = /c/g;

console.log(str4.replace(reg41,'d'));


var re= /阿根廷|劳工部长|习主席|历史性机遇/;


var strtime = "2018/+(12)++=-01";

var regtime = /-/g;



function formatTime(str) {

    var regtime = /(\d+)\D+(\d+)\D+(\d+)/;

    return str.replace(re,function ($0, $1, $2, $3) {
        return $1+"年"+$2+"月"+$3+"日";
    })

}

console.log(formatTime(strtime));

var abc = "abc";
var regabc = /(a)(b)(c)/;
var regabcg = /(a)(b)(c)/g;

console.log(abc.match(regabc));
console.log(abc.match(regabcg));

var stab = "abdacd";
var regt1 = /a[bc]d/
var regt2 = /abd|acd/

//相同
console.log(stab.match(regt1));
console.log(stab.match(regt2));



var strs="abc"
var regs = /a[^w]c/

console.log(regs.test(strs));


//剔除掉除了汉字以外的所有字符
var filter = /<[a-zA-Z]+>/;
//范围太大用排除法
var filter = /<[^>]+>/;  //只要没到右尖括号就说明标签没结束，不是右尖括号的所有字符


var xx = "abababaabbbbb"
var regxx = /(ab)*/;
console.log(xx.match(regxx));

var qq = "12345a"
var regq = /^[1-9]\d{4,11}$/;

console.log(regq.test(qq));

var qqq = "2345";
var regqqq = /[^1]/g;

console.log(qqq.match(regqqq));


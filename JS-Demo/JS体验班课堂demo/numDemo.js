

var arr = [ '100px', 'abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, null, global, [], true, '200px'-30,'23.45元', 5, Number('abc'), function(){ alert(3); }, 'xyz'-90 ];

var cmp = [];

for (let i = 0; i < arr.length; i++) {
    
    if(typeof arr[i] === "number"){
        isNaN(arr[i]) || console.log(`所有数字打印：${arr[i]}`);
    }

    if(typeof(parseInt(arr[i])) === "number"){
        isNaN(parseInt(arr[i])) || cmp.push(arr[i]);
    }

    if(isNaN(arr[i])){
        console.log(`我是NaN:${arr[i]}`);
    }

}

if(cmp){
    var max = cmp[0];
}

for (let i = 0; i < cmp.length; i++) {
    if (cmp[i] > max) {
        max = cmp[i];
    }
}
console.log("max值:"+max);


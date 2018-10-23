//属性property和值value 键值对
//对象字面量

var farm = {
    farmer: "卡斯伯", dogs: ["张姆士", "庞的"],
    chick: 15,
    cornField: [8, 5, 6],
    broccoliField: [6, 6, 6, 6],
    scarecrow: 9,
    goDinner: function () {
        console.log("卡斯伯，你该回家吃饭了！")
    }
}

/*等同于写法：
    var farm = new object();
    farm.farmer = "卡斯伯";
    farm.chick = 15;
    farm.scarecrow = 9;
* */

var farm2 = new Object()
farm2.farmer = "卡斯伯";
farm2.chick = 16;
farm2.scarecrow = 9;


/*
数组表示有序数据的集合，而对象表示无序数据的集合。如果数据的顺序很重要，就用数组，否则就用对象。
当然，数组和对象的另一个区别是，数组的数据没有”名称”（name），对象的数据有”名称”（name）*/

console.log(typeof(farm))       //类型是object
console.log(farm["chick"])
console.log(farm.chick)
console.log(farm.dogs)
console.log(farm['dogs'][0])


console.log('两种访问方式：~~~~~~')
console.log("farm2['chick']：" + farm2['chick'])
console.log("farm2.chick：" + farm2.chick)

console.log("函数function作为Object的属性")
console.log(farm.goDinner())
console.log(farm['goDinner']())

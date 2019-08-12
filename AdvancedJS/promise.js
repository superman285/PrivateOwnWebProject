var getA = function(){


    /*setTimeout(()=>{
        console.log('getA');
    },1000)*/

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getA');
            resolve('resgetA')
        },2000)
    })

};

var getB = async function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getB');
            resolve('resgetB')
        },2400)
    })
};

(async ()=>{
    //并发地开始两个任务，一共2400ms后可以拿到结果
    let [a,b] = await Promise.all([getA(),getB()]);
    console.log(a,b);
})()

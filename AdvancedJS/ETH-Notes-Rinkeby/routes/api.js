//let Note =  require("../src/js/mod/note.js")

const Koa = require("koa");
const app = new Koa();
const router = require('koa-router')();
router.prefix('/api');
const Web3 = require('web3');

const Tx = require('ethereumjs-tx');
const ethABI = require('ethereumjs-abi');
const ethers = require('ethers');

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

let {web3,abi,contractAddr,contractFounder,noteContractObj} =require("../src/js/mod/contractABI_backend.js");

let count = web3.eth.getTransactionCount(contractFounder);
let gasLimit = 300000;

let privateKey = new Buffer.from("93945e79d3fd4d0fdc60cb2c9031b2d8acf3c688f3185c0730ed30d85c66b77f","hex");




//根据是否登录 展示不同笔记 不能用之前session的方法了
router.get("/notes",async (ctx, next) => {

    console.log('在ide控制台打出/notes，来了，从区块链获取');
    //区块链版本
    if (web3.utils.isAddress(ctx.query.data)) {
        await noteContractObj.methods.getMyNotes.call({
            from:ctx.query.data
        },(err,result)=>{
            //let data = result;
            ctx.response.body = {
                status:0,
                data:result,
                query: 'myNotes'
            }
        });
    }else {
        await noteContractObj.methods.getAllNotes.call({},(err,result)=>{
            //let data = result;
            ctx.response.body = {
                status:0,
                data:result,
                query: 'allNotes'
            }
        });
    }
    //如果koa服务器计算的结果是异步的
    //最好在 ctx 前加async ，然后在 计算方法前加await 就会等到 计算完成才将响应体传给客户端 就ok了
    //如果这儿不用await 相当于直接返回给客户端了 就404了 用了await就会等到结果返回
});

router.post("/note/add",async (ctx, next) => {
    console.log('$$$$$/add$$$$$$');


    var mnemonic = "gadget strike phrase coil cupboard stone whip popular cradle never aisle romance";
    var privateKey = "93945e79d3fd4d0fdc60cb2c9031b2d8acf3c688f3185c0730ed30d85c66b77f";

    let etherProvider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3");

    let wallet = new ethers.Wallet(privateKey,etherProvider);

    //wallet连接了provider,实例化合约时使用wallet,或者用以下写法
    /*
    * var contract = new ethers.Contract(contractAddr,abi,etherProvider);
    * var noteContractObj = contract.connect(wallet)
    */
    var noteContractObj = new ethers.Contract(contractAddr,abi,wallet);

    let note = ctx.request.body.note,
    uid = ctx.request.body.uid;

    let addResult;

    //如果调方法后没有回调 就在合约写个事件event 然后这儿监听下，如果变化了就给前端发东西

    //let [err,result] = await noteContractObj.addNote();
    let tx = await noteContractObj.addNote(note);

    let receipt = await tx.wait(2);

    if (receipt) {
        console.log('来，打印方法receipt');
        console.log(receipt);
        ctx.response.body = {status: 0, result: addResult};

    }

    /*await noteContractObj.methods.addNote(note).send({
        from:uid,
        gas:300000,
    },(err,result)=>{
        if (err) {
            console.log('addNoteFailed',err);
            addResult = {
                success: false,
                res: err,
            }
            ctx.response.body = {status: 3, result: addResult, errorMsg: "Failed to add Note!"};

        }else {
            console.log('addNoteSuccess',result);
            addResult = {
                success: true,
                res: result,
            };
            ctx.response.body = {status: 0, result: addResult};
        }
    });*/



    //处理错误
    /*process.on('unhandledRejection', (reason, promise) => {
        console.log('Unhandled Rejection:', reason)
        // 在这里处理
    })*/


    //或者移出来也可以，因为前一个方法是await
    /*if(addResult.success) {
        ctx.response.body = {status: 0, result: addResult};
    }else {
        ctx.response.body = {status: 3, result: addResult, errorMsg: "Failed to add Note!"};
    }*/
});

router.post("/note/edit",async (ctx, next) => {
    console.log('/edit');
    let uid = ctx.request.body.uid,
        noteid = ctx.request.body.noteid,
        note = ctx.request.body.note;

    //注意此处要转为整形
    let noteOwner = await noteContractObj.methods.noteidTouid(noteid).call();

    console.log('=====来对比下=====');
    console.log(parseInt(uid),noteOwner,Number(uid)==noteOwner);

    console.log('别处幺蛾子',web3);

    var nonce = Number(web3.eth.getTransactionCount(contractFounder));

    var paramsData = ethABI.rawEncode(["uint","string"], [noteid,note]).toString('hex');
    var rawTx = {
        from: contractFounder,
        // nonce: web3.utils.toHex(count),
        nonce: web3.utils.toHex(count),
        gasPrice: '0x97359400',
        gasLimit: '0x495f05',
        to: contractAddr,
        value: "0x0",
        //data: "0xa4edff47"+paramsData,
        data: "0x49781ef9"+paramsData,
    }

    var tx = new Tx(rawTx);
    tx.sign(privateKey);
    var serializedTx = tx.serialize();



    let updateRes;
    //需要判uid是否空 否则不只是err 整个执行智能合约方法语句都报错了
    if(uid) {
        if(Number(uid) !== Number(noteOwner)){
            console.log("笔记所有者和笔记修改不是同一人，不允许");
            ctx.response.body = {status: 4, result: "ownerErr", errorMsg: "无法修改他人的便签!"};
            return;
        }

        //不加await相当于没返回body，404了
        await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash)=> {
            if (!err){
                console.log('!@#$%^&*我的天终于成功了',hash);
                ctx.response.body = {status: 0};
                updateRes = {
                    success: true,
                    res: hash,
                };
                //ctx.response.body = {status: 0, result: updateRes};
                console.log('来，打印出ctx.body', ctx.body);
            }else{
                console.log(err);
                updateRes = {
                    success: false,
                    res: err,
                };
                ctx.response.body = {status: 4, result: updateRes, errorMsg: "Failed to update Note!"}
            }
        }).on('receipt', res=>{
            console.log('真正成功',res);
            updateRes = {
                success: true,
                res: hash,
            };
            ctx.response.body = {status: 0, result: updateRes};
        });

        /*await noteContractObj.methods.updateNote(noteid, note).send({
            from: uid,
            gas: 300000
        }, (err, result) => {
            if (err) {
                console.log('updateNoteFailed', err);
                updateRes = {
                    success: false,
                    res: err,
                };
                ctx.response.body = {status: 4, result: updateRes, errorMsg: "Failed to update Note!"};
            } else {
                console.log('updateNoteSuccess', result);
                updateRes = {
                    success: true,
                    res: result,
                };
                ctx.response.body = {status: 0, result: updateRes};
            }
        })*/
    }else {
        console.log('uid为空，游客状态');
        ctx.response.body = {status: 4, result: updateRes, errorMsg: "游客只可以阅览便签!请先登录!"};
    }
});

router.post("/note/delete",async (ctx, next) => {
    console.log('/del');
    let uid = ctx.request.body.uid,
        noteid = ctx.request.body.noteid;

    console.log("=====uid======");
    console.log(Number(uid));
    console.log("=====noteOwner======");

    let noteOwner = await noteContractObj.methods.noteidTouid(noteid).call();
    let deleteRes;
    console.log(typeof noteOwner);
    if (uid) {
        if(Number(uid) !== Number(noteOwner)){
            console.log("笔记所有者和笔记删除不是同一人，不允许");
            ctx.response.body = {status: 5, result: "ownerErr", errorMsg: "亲,不能删除别人的便签哦!"};
            return;
        }
        await noteContractObj.methods.deleteNote(noteid).send({
            from: uid,
            gas: 300000,
        },(err,result)=>{
            if(err) {
                deleteRes = {
                    success: false,
                    res: err,
                };
                ctx.response.body = {status: 5, result: deleteRes, errorMsg: "Failed to delete Note!"};
            }else {
                deleteRes = {
                    success: true,
                    res: result
                }
                ctx.body = {status:0,result:deleteRes}
            }
        });
    }else {
        console.log('游客状态，无法del');
        deleteRes = {
            success: false,
            res:"guest status err!"
        }
        ctx.response.body = {status: 5, result: deleteRes, errorMsg: "游客无法进行删除操作!"};
    }
});

module.exports = router;

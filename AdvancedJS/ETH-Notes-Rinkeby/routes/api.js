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

let {web3, abi, contractAddr, contractFounder, noteContractObj, mywallet, etherProvider, myetherContractObj} = require("../src/js/mod/contractABI_backend.js");


//根据是否登录 展示不同笔记 不能用之前session的方法了
router.get("/notes", async (ctx, next) => {

    console.log('在ide控制台打出/notes，来了，从区块链获取');
    console.log("!@#$%^&*打个实例",noteContractObj);
    //区块链版本
    if (web3.utils.isAddress(ctx.query.data)) {
        await noteContractObj.methods.getMyNotes.call({
            from: ctx.query.data
        }, (err, result) => {
            //let data = result;
            ctx.response.body = {
                status: 0,
                data: result,
                query: 'myNotes'
            }
        });
    } else {
        await noteContractObj.methods.getAllNotes.call({}, (err, result) => {
            //let data = result;
            ctx.response.body = {
                status: 0,
                data: result,
                query: 'allNotes'
            }
        });
    }
    //如果koa服务器计算的结果是异步的
    //最好在 ctx 前加async ，然后在 计算方法前加await 就会等到 计算完成才将响应体传给客户端 就ok了
    //如果这儿不用await 相当于直接返回给客户端了 就404了 用了await就会等到结果返回
});

router.post("/note/add", async (ctx, next) => {
    console.log('$$$$$/add$$$$$$');

    let note = ctx.request.body.note,
        uid = ctx.request.body.uid,
        privateKey = ctx.request.body.key;

    //重新实例化钱包和合约，因为私钥需要从前端获取
    var wallet = new ethers.Wallet(privateKey, etherProvider);
    var etherContractObj = new ethers.Contract(contractAddr, abi, wallet);


    //如果调方法后没有回调 就在合约写个事件event 然后这儿监听下，如果变化了就给前端发东西
    let addResult;
    try {
        let result = await etherContractObj.addNote(note);
        addResult = {
            success: true,
            res: result,
        };
        //必须加，不然连续操作连续发起交易就会出问题
        await result.wait();
        ctx.response.body = {status: 0, result: addResult};
    } catch (err) {
        console.log('await addNote error', err);
        addResult = {
            success: false,
            res: err,
        };
        ctx.response.body = {status: 3, result: addResult, errorMsg: "Failed to add Note!"};
    }
});

router.post("/note/edit", async (ctx, next) => {
    console.log('/edit');
    let uid = ctx.request.body.uid,
        noteid = ctx.request.body.noteid,
        note = ctx.request.body.note,
        privateKey = ctx.request.body.key;
    //注意此处要转为整形
    let noteOwner = await noteContractObj.methods.noteidTouid(noteid).call();

    //重新实例化钱包和合约，因为私钥需要从前端获取
    var wallet = new ethers.Wallet(privateKey, etherProvider);
    var etherContractObj = new ethers.Contract(contractAddr, abi, wallet);

    let updateRes;
    //需要判uid是否空 否则不只是err 整个执行智能合约方法语句都报错了
    if (uid) {
        if (Number(uid) !== Number(noteOwner)) {
            console.log("笔记所有者和笔记修改不是同一人，不允许");
            ctx.response.body = {status: 4, result: "ownerErr", errorMsg: "无法修改他人的便签!"};
            return;
        }
        try {
            let result = await etherContractObj.updateNote(noteid, note);
            updateRes = {
                success: true,
                res: result
            };
            //必须加，不然连续操作连续发起交易就会出问题
            await result.wait();
            ctx.body = {status: 0, result: updateRes}
        } catch (err) {
            updateRes = {
                success: true,
                res: err
            };
            ctx.body = {status: 4, result: updateRes, errorMsg: "Failed to edit Note!"}
        }
    } else {
        console.log('uid为空，游客状态');
        updateRes = {
            success: false,
            res: 'guestAuth Error!',
        };
        ctx.response.body = {status: 4, result: updateRes, errorMsg: "游客只可以阅览便签!请先登录!"};
    }

    //ethereumjs-tx 原生写法,失败,废弃,转投ether.js怀抱
    /*
    var nonce = Number(await(web3.eth.getTransactionCount(contractFounder)));
    var paramsData = ethABI.rawEncode(["uint","string"], [noteid,note]).toString('hex');
    var rawTx = {
        from: contractFounder,
        nonce: nonce
        //nonce: web3.utils.toHex(nonce),
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
    await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash)=> {}
    */
});

router.post("/note/delete", async (ctx, next) => {
    console.log('/del');
    let uid = ctx.request.body.uid,
        noteid = ctx.request.body.noteid,
        privateKey = ctx.request.body.key;

    //重新实例化钱包和合约，因为私钥需要从前端获取
    var wallet = new ethers.Wallet(privateKey, etherProvider);
    var etherContractObj = new ethers.Contract(contractAddr, abi, wallet);

    let noteOwner = await noteContractObj.methods.noteidTouid(noteid).call();
    let deleteRes;
    let txNums = Number(await web3.eth.getTransactionCount(contractFounder));
    /*let overrides = {
        nonce: txNums,
        gasPrice: '0xa7359400',
        gasLimit: '0x495f05',
        value: "0x0",
        chainId: 4
    };
    etherContractObj.deleteNote(noteid,overrides)
    */

    if (uid) {
        if (Number(uid) !== Number(noteOwner)) {
            console.log("笔记所有者和笔记删除不是同一人，不允许");
            ctx.response.body = {status: 5, result: "ownerErr", errorMsg: "亲,不能删除别人的便签哦!"};
            return;
        }
        try {
            let result = await etherContractObj.deleteNote(noteid);
            deleteRes = {
                success: true,
                res: result,
            };
            //必须加，不然连续操作连续发起交易就会出问题
            await result.wait();
            ctx.body = {status: 0, result: deleteRes};
        } catch (err) {
            deleteRes = {
                success: false,
                res: err,
            };
            console.log(err);
            ctx.body = {status: 5, result: deleteRes, errorMsg: "Failed to delete Note!"}
        }
    } else {
        console.log('游客状态，无法del');
        deleteRes = {
            success: false,
            res: "guestAuth Error!"
        };
        ctx.response.body = {status: 5, result: deleteRes, errorMsg: "游客无法进行删除操作!"};
    }
});

module.exports = router;

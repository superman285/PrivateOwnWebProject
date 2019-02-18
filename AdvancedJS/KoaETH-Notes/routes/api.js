//let Note =  require("../src/js/mod/note.js")

const Koa = require("koa");
const app = new Koa();
const router = require('koa-router')();
router.prefix('/api');
const Web3 = require('web3');

console.dir(Web3);


const bodyParser = require('koa-bodyparser');
app.use(bodyParser(),(ctx,next)=>{
    next();
});

const session = require('koa-session2');
const SESSION_CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};

app.use(session(SESSION_CONFIG, app));

/*let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesContent",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesArr",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "newtext",
                "type": "string"
            }
        ],
        "name": "updateNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "founder",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "noteidTouid",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "noteIdx",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getMyNotes",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesMap",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "text",
                "type": "string"
            }
        ],
        "name": "addNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            }
        ],
        "name": "getNote",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            }
        ],
        "name": "deleteNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllNotes",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "founderID",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userNotes",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "noteidToindex",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];
let contractAddr = "0x8fd9c5dd9bb93f6014e55efec937fc60897025a6";
let contractFounder = "0x2b9579b9eb65dbc6a10a3d27fc8aba8f615bb0be";
let noteContractObj = new web3.eth.Contract(abi,contractAddr);*/

let {web3,abi,contractAddr,contractFounder,noteContractObj} =require("../src/js/mod/contractABI_backend.js");

//根据是否登录 展示不同笔记 不能用之前session的方法了
router.get("/notes",async (ctx, next) => {

    console.log('在ide控制台打出/notes，来了，从区块链获取');
    //中心化mysql版本
    /*let sql = "";
    if(ctx.session.user) {
        console.log('看github用户自己的笔记');
        sql = `select * from notesContent where uid=${ctx.session.user.id}`;
    }else {
        console.log('没有登录，看所有笔记');
        sql = `select * from notesContent`;
    }
    let [data] = await db.query(sql);*/
    //区块链版本
    console.log(ctx.query.data);
    console.log(web3.utils.isAddress(ctx.query.data));
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

    let note = ctx.request.body.note,
        uid = ctx.request.body.uid;

    console.dir(ctx);
    //中心化版本
    /*let sql = "insert into notesContent (uid,noteid,text) values (?,?,?)";
    let [ results ] = await db.query(sql, [uid,noteid,note], (err,result)=>{
        console.log('result');
        console.log(result);
    });
    //回调函数 查询失败后可调err，暂未试验成功
    */

    let addResult;
    await noteContractObj.methods.addNote(note).send({
        from:uid,
        gas: 300000,
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
    });
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

    
    let updateRes;
    //需要判uid是否空 否则不只是err 整个执行智能合约方法语句都报错了
    if(uid) {
        if(Number(uid) !== Number(noteOwner)){
            console.log("笔记所有者和笔记修改不是同一人，不允许");
            ctx.response.body = {status: 4, result: "ownerErr", errorMsg: "无法修改他人的便签!"};
            return;
        }
        await noteContractObj.methods.updateNote(noteid, note).send({
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
        })
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

    //不写ctx.response.body就404啦
});

module.exports = router;

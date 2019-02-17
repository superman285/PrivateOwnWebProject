//let Note =  require("../src/js/mod/note.js")

const Koa = require("koa");
const app = new Koa();
const router = require('koa-router')();
router.prefix('/api');
const Web3 = require('web3');

console.dir(Web3);


const mysql2 = require('mysql2/promise');
let db;
( async () => {
    db = await mysql2.createConnection({
        user: 'root',
        password: '123456',
        database: 'notesDB'
    });
} )();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

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

let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
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
let contractAddr = "0x47cfaeeda8c9e483c4fd87b3de4fb97b5ac2485a";
let contractFounder = "0x2b9579b9eb65dbc6a10a3d27fc8aba8f615bb0be";
let noteContractObj = new web3.eth.Contract(abi,contractAddr);

router.get("/notes",async (ctx, next) => {
    console.log('在ide控制台打出/notes，来了，从区块链获取');
    /*web3.eth.getAccounts(function (err, result) {
        console.log(`web3获取账户:${result}`);
        console.log('来来来web3',web3);
    });*/
    /*let sql = "";
    if(ctx.session.user) {
        console.log('看github用户自己的笔记');
        sql = `select * from notesContent where uid=${ctx.session.user.id}`;
    }else {
        console.log('没有登录，看所有笔记');
        sql = `select * from notesContent`;
    }
    let [data] = await db.query(sql);*/
    let data;
    console.log('***********contractObj');
    console.log(noteContractObj);
    await noteContractObj.methods.getAllNotes.call({
        from: contractFounder
    },(err,result)=>{
        data = result;
        console.log('结果的类型是很好奇啊',typeof data);
        //console.log(typeof data[0]);
        console.log('data来了');
        console.dir(data);

        ctx.response.body = {
            status:0,
            data:result,
        }
        console.log(ctx.response.body);
    });

    //如果koa服务器计算的结果是异步的

    //最好在 ctx 前加async ，然后在 计算方法前加await 就会等到 计算完成才将响应体传给客户端 就ok了
    //如果这儿不用await 相当于直接返回给客户端了 就404了 用了await就会等到结果返回

});

router.post("/note/add",async (ctx, next) => {

    console.log('/add');
    if(!ctx.session || !ctx.session.user){
        ctx.body={status: 1, errorMsg: '未登录只可使用临时便笺(刷新会清空)，请登录!'};
        return;
    }

    /*if (!ctx.request.body.note) {
        ctx.response.body={status: 2, errorMsg: '内容不能为空'};
    }*/

    console.dir(ctx);
    var note = ctx.request.body.note;
    var noteid = ctx.request.body.noteid;
    var uid = ctx.session.user.id;
    console.log({text: note, uid: uid})


    let sql = "insert into notesContent (uid,noteid,text) values (?,?,?)";
    let [ results ] = await db.query(sql, [uid,noteid,note], (err,result)=>{
        console.log('result');
        console.log(result);
    });

    //回调函数 查询失败后可调err，暂未试验成功
    ctx.response.body = {status: 0};

    /*Note.create({text: note, uid: uid}).then(function(){
        console.log(arguments)
        ctx.response.send({status: 0})
    }).catch(function(){
        ctx.response.send({ status: 1,errorMsg: '数据库异常或者你没有权限'});
    })*/

});

router.post("/note/edit",async (ctx, next) => {

    /*if(!req.session || !req.session.user){
        return res.send({status: 1, errorMsg: '请先登录'})
    }*/

    console.log('/edit');

    var noteid = ctx.request.body.id;
    var note = ctx.request.body.note;


    if(ctx.session.user) {
        let sql = "update notesContent set text = ? where noteid = ?";
        let [ results ] = await db.query(sql,[note,noteid])
        ctx.response.body = {status: 0};
    }else {
        ctx.response.body = {status: 1,errorMsg:'未登录用户只能看,修改无效哦!'};
    }



});

router.post("/note/delete",async (ctx, next) => {

    console.log('/del');

    var noteid = ctx.request.body.id;
    var note = ctx.request.body.note;
    let sql = "delete from notesContent where noteid = ?"
    let [results] = await db.query(sql,[noteid])

    //这个才算有响应 不写就404啦
    ctx.response.body = {status: 0};
});

module.exports = router;
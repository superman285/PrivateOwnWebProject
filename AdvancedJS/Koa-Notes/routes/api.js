//let Note =  require("../src/js/mod/note.js")

const Koa = require("koa");
const app = new Koa();
const router = require('koa-router')();
router.prefix('/api')


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

router.get("/notes",async (ctx, next) => {
    console.log('在ide控制台打出/notes');

    let sql = "";
    console.log('ctxsessionuser',ctx.session);
    if(ctx.session.user) {
        console.log('看github用户自己的笔记');
        sql = `select * from notesContent where uid=${ctx.session.user.id}`;
    }else {
        console.log('没有登录，看所有笔记');
        sql = `select * from notesContent`;
    }


    //data为数组，数组元素为笔记数据对象，对象含3个键
    let [data] = await db.query(sql);

    console.log('data来了');
    console.dir(data);
    ctx.body = {
        status: 0,
        data
    }

    //ctx.response.send({status: 0, data});

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

    console.dir(ctx.request.body);

    let sql = "update notesContent set text = ? where noteid = ?";
    let [ results ] = await db.query(sql,[note,noteid])

    ctx.response.body = {status: 0};

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

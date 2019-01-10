const Koa = require('koa');
//const koaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const multer = require('koa-multer'); //文件上传模块

let app = new Koa();
let router = new KoaRouter()




router.get('/getdata',async ctx=>{
    ctx.body = '你好啊';
})


app.use(router.routes());
app.listen(80);
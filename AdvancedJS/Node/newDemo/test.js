const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router');
const router = new KoaRouter();

const http = require('http');





/*app.use(async(ctx,next)=>{
    ctx.body = 'hello koa';
})*/

let searchAPI = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&cb=search&wd="


router.get('/',ctx=>{
    ctx.body = '首页'
})



var req = http.request()



app.use(router.routes());

app.listen(3000)
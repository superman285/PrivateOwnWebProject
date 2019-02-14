const KoaRouter = require('koa-router');

const router = new KoaRouter();
//还有一种写法const router = require('koa-router')()

const Koa = require('koa');
const app = new Koa();

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

//是获取数据
router.get('/', async (ctx, next) => {

    let data = {};
    console.log('~~~~~~~我是index的啊啊啊ctx.session~~~~~~~~','=-=-=-=-=');
    console.dir(ctx.session);
    if(ctx.session.user){
        console.log('=======user不为空=====');
        data = {
            isLogin: true,
            user: ctx.session.user,
        }
    }else {
        data = {
            isLogin: false,
        }
    }

    let userstr = JSON.stringify(data);

    //若使用koa-views此处应使用index.njk 而非index
    await ctx.render('index', {
        isLogin: data.isLogin,
        user: data.user,
        data: userstr,
    });
})

//访问/string的返回页
router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

//访问/json的返回页
router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router;

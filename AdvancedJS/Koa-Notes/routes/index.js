const KoaRouter = require('koa-router');

const router = new KoaRouter();

//还有一种写法const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    //若使用koa-views此处应使用index.njk 而非index
    await ctx.render('index', {});
    await next();
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

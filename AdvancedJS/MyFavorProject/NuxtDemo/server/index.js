const Koa = require('koa')
const consola = require('consola')
const {Nuxt, Builder} = require('nuxt')

const app = new Koa()
const KoaRouter = require('koa-router');
const router = new KoaRouter();

//使用ctx.request.body所需
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


let createAccountMethod = require("../controllers/createAccount").createAccount;

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(
    app.env === 'production')

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    const {
        host = process.env.HOST || '127.0.0.1',
        port = process.env.PORT || 3000
    } = nuxt.options.server

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }
    ;




    router.get('/create', ctx => {
        ctx.body = '这是创建页面'
    });
    router.post('/createaccount',createAccountMethod);

    app.use(ctx => {
        ctx.status = 200
        ctx.respond = false // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res)
    });

    //启动路由
    app.use(router.routes());
    app.use(router.allowedMethods());


    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}

start();

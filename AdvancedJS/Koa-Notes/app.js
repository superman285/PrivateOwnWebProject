const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require("path");

const nunjucks = require("koa-nunjucks-2");

const index = require('./routes/index')
const api = require('./routes/api')
const auth = require('./routes/auth')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

//默认带上public 访问静态资源时直接 /stylesheets/style.css即可
app.use(require('koa-static')(__dirname + '/public'))

//这种写法 访问静态资源时需要 /public/stylesheets/style.css
app.use(require('koa-static')(__dirname))

//可换别的模板引擎 koa-views的功能 若使用此插件 则index.js处应配置为index.njk 加后缀
/*app.use(views(__dirname + '/views', {
    map: {
        njk: 'nunjucks'
    }
}))*/

//koa-nunjucks-2的功能 好像更爽
app.use(nunjucks({
    ext: 'njk',
    path: path.resolve(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next();
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
//结果和写index.allowedMethods()一样
app.use(index.routes(), index)
app.use(api.routes(),api);
app.use(auth.routes(),auth);
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app

const Koa = require('koa');
const KoaRounter = require('koa-router');
const koaStaticCache = require('koa-static-cache');
const Nunjucks = require('nunjucks');
const mysql2 = require('mysql2/promise');


const app = new Koa();


app.use(koaStaticCache({
    prefix: '/public',
    dir: './static',
    gzip: true,
    preload: false,
    dynamic: false
}))




app.listen(80);
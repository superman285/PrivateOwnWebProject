const Koa = require('koa2');
//相当于const http = require('http');

const app = new Koa();
//相当于 const app = new http.Server();| 或 http.createServer();

app.use(ctx => {
    ctx.response.body = 'Hello World2';
});

app.listen(80);
//相当于server.listen(80)


const test1 = require('fs');

console.log(test1);

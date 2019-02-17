const router = require('koa-router')()
const Web3 = require('web3');

console.dir(Web3);

let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
console.dir(web3);

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

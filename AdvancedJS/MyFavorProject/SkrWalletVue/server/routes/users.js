const router = require('koa-router')()




let creatAccountMethod = require("../controller/createAccount").createAccount;

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
});

router.post('/createaccount',creatAccountMethod);

module.exports = router;

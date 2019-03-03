const router = require('koa-router')()




let creatAccountMethod = require("../controller/createAccount").createAccount;
let unlockWithPrivatekey = require("../controller/account").unlockWithPrivatekey;

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
});

router.post('/upload',ctx=>{
    console.log(ctx.request.files);

    ctx.body = {
        code: 0,
        message: "upload success?",
        data: ctx.request
    }
})

router.post('/createaccount',creatAccountMethod);

router.post('/unlockwithprivatekey',unlockWithPrivatekey);

module.exports = router;

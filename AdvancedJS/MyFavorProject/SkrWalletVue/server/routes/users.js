const router = require('koa-router')()

let createAccByKs = require("../controller/createAccount").createAccountByKeystore;
let createAccByPk = require("../controller/createAccount").createAccountByPrivatekey;
let unlockWithPrivatekey = require("../controller/account").unlockWithPrivatekey;
let unlockWithKeystore = require("../controller/account").unlockWithKeystore;
let getBalance = require("../controller/account").getBalance;
let sendTx = require("../controller/transaction").sendTransaction;

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

router.post('/createaccountbyks',createAccByKs);
router.post('/createaccountbypk',createAccByPk);


router.post('/unlockwithprivatekey',unlockWithPrivatekey);
router.post('/unlockwithkeystore',unlockWithKeystore);

router.get('/getbalance',getBalance);

router.post('/sendtx',sendTx);

module.exports = router;

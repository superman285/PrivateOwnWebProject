const router = require('koa-router')({
    prefix: '/users'
})

//router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

//访问/users/bar时的返回页
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router

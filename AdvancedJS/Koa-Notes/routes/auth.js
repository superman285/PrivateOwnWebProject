
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')({
    prefix: '/auth'
});

const session = require('koa-session2');

const passport = require('koa-passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cookieParser = require('koa-cookie-parser');
const bodyParser = require('koa-bodyparser');

var githubData = {};

const SESSION_CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};

app.use(cookieParser({
    cookieNameList:['uid','noteid'],
    cipherKey:"hello world",
    maxAge:60*60*24
}));
app.use(bodyParser());
app.keys = ['some secret hurr'];
app.use(session(SESSION_CONFIG, app));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    console.log('---serializeUser---')
    console.log(user)

    githubData = user;
    done(null, user);

    console.log('--------githubData-----------');
    console.dir(githubData);
});

passport.deserializeUser(function(obj, done) {
    console.log('---deserializeUser---')
    console.log(obj);
    done(null, obj);
});

/*GitHubStrategy.prototype.userProfile = function(token, done) {
    done(null, {})
}*/

passport.use(new GitHubStrategy({
    clientID:'63d1a5ceffbca3ee0871',
    // GITHUB_CLIENT_ID,
    clientSecret: '506dfe7197f1916ff25a3bca4388d35c038d36ac',
    // GITHUB_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
},(accessToken,refreshToken,profile,done)=>{
    /*User.findOrCreate({githubId:profile.id},function(err,user){
        return done(err,user);
    })*/
    done(null,profile);
}));


router.get('/logout',async (ctx,next)=>{
    console.log('======destroy======',ctx.session);
    ctx.session = null;
    ctx.response.redirect('/');
})

//passport.authenticate('github',{ scope: [ 'user:email' ] })
router.get('/github',passport.authenticate('github'));


//https://www.jianshu.com/p/622561ec7be2
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    async(ctx, next) => {

        console.log('------ctxsession--------',ctx.session);
        
        console.log('ctxsessionuser',ctx);
        console.log('ctxsessionuser',next);

        //callback这儿必须给ctx.session设置点啥 不然报错，这个地方
        //相当于一个简单封装 把passport.user移到user上
        ctx.session.user = {
            id: ctx.session.passport.user.id,
            username: ctx.session.passport.user.displayName || ctx.session.passport.user.username,
            avatar: ctx.session.passport.user._json.avatar_url,
            provider: ctx.session.passport.user.provider
        };
        
        
        
        
        ctx.response.redirect('/');
    });



module.exports = router;

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
    ctx.session.destory();
    ctx.response.redirect('/');
})

//passport.authenticate('github',{ scope: [ 'user:email' ] })
router.get('/github',passport.authenticate('github'));


//https://www.jianshu.com/p/622561ec7be2
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    async(ctx, next) => {
    
        ctx.session.user = 2;

        console.log('------ctxsession--------',ctx.session);
        
        console.log('ctxsessionuser',ctx);
        console.log('ctxsessionuser',next);
        
        /*ctx.session.user = {
            /!*id: ctx.request.body.user.id,
            username: ctx.request.body.user.displayName || ctx.request.body.user.username,
            avatar: ctx.request.body.user._json.avatar_url,
            provider: ctx.request.body.user.provider*!/
            id: githubData.id,
            username: githubData.displayName || githubData.username,
            avatar: githubData._json.avatar_url,
            provider: githubData.provider
        };*/
        ctx.response.redirect('/');
    });



module.exports = router;
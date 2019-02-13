
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')({
    prefix: '/auth'
});

const session = require('koa-session');

const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;


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

app.use(session(SESSION_CONFIG, app));


passport.serializeUser(function(user, done) {
    console.log('---serializeUser---')
    console.log(user)
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    console.log('---deserializeUser---')
    done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID:'63d1a5ceffbca3ee0871',
    // GITHUB_CLIENT_ID,
    clientSecret: '506dfe7197f1916ff25a3bca4388d35c038d36ac',
    // GITHUB_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
},(accessToken,refreshToken,profile,cb)=>{
    /*User.findOrCreate({githubId:profile.id},function(err,user){
        return cb(err,user);
    })*/
    done(null,profile);
}));


router.get('/logout',async (ctx,next)=>{
    ctx.session.destory();
    ctx.response.redirect('/');
})

//passport.authenticate('github')
router.get('/github',async (ctx) => {
    ctx.response.body = 'githubbody'
});

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    async(ctx, next) => {
        ctx.session.user = {
            id: ctx.request.user.id,
            username: ctx.request.user.displayName || ctx.request.user.username,
            avatar: ctx.request.user._json.avatar_url,
            provider: ctx.request.user.provider
        };
        res.redirect('/');
    });

module.exports = router;
const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const multer = require('koa-multer'); //文件上传模块

let app = new Koa();
let router = new KoaRouter()


app.use(koaStaticCache({
    //prefix: '/public',
    dir: './',
    dynamic: true,
    gzip: true
}));

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadFiles/');
        console.log('destinationReq',file);
    },
    filename: function (req, file, cb) {
        console.log(file.originalname);
        console.dir(file.fieldname);

        let lastPointPos = file.originalname.lastIndexOf('.');
        let ext = file.originalname.substring(lastPointPos);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});


const upload = multer( {
    storage:storage
} );

router.post('/upload', upload.single('file'), async ctx => {
    ctx.response.body = '上传成功辣';
});


app.use(router.routes());
app.listen(80);
var koa = require('koa');
const path = require('path');
var app = new koa();
var cors = require('koa-cors');
var config = require('./config');
const koaBody = require('koa-body');
// var renderRoute = require('./router/render');
// var apiRoute = require('./router/api');

const serve = require('koa-static');
const session = require('koa-session');
var staticCache = require('koa-static-cache');


app.keys = ['nblog'];
const CONFIG = {
    key: 'nblog:session-id', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));

app.use(cors());
app.use(koaBody({ multipart: true }));
app.use(serve(path.join(__dirname, '/public')));
app.use(staticCache(path.join(__dirname, '/public'), {
    maxAge: 365 * 24 * 60 * 60
}));
// api 路由
app.use(apiRoute.routes())
    .use(apiRoute.allowedMethods());

// 渲染 路由
app.use(renderRoute.routes())
    .use(renderRoute.allowedMethods());

module.exports = app

// app.listen(config.port,()=>{
//     console.log('server run in port:' + config.port);
// });

var koa = require('koa');
const path = require('path');
var app = new koa();
var cors = require('koa-cors');
var config = require('./config');
const koaBody = require('koa-body');
var renderRoute = require('./router/render');
var apiRoute = require('./router/api');
const serve = require('koa-static');
app.use(cors());
app.use(koaBody({ multipart: true }));
app.use(serve(path.join(__dirname, '/public')));

// api 路由
app.use(apiRoute.routes())
    .use(apiRoute.allowedMethods());

// 渲染 路由
app.use(renderRoute.routes())
    .use(renderRoute.allowedMethods());


app.listen(config.port,()=>{
    console.log('server run in port:' + config.port);
});

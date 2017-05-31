var koa = require('koa');
var app = new koa();
var config = require('./config');

var renderRoute = require('./router/render');
var apiRoute = require('./router/api');
// api 路由
app.use(apiRoute.routes())
    .use(renderRoute.allowedMethods());
// 渲染 路由
app.use(renderRoute.routes())
    .use(renderRoute.allowedMethods());

app.listen(config.port,()=>{
    console.log('server run in port:' + config.port);
});

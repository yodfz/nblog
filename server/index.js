var koa = require('koa');
var app = new koa();
var config = require('./config');

var renderRoute = require('./router/render');


app.listen(config.port,()=>{
    console.log('server run in port:' + config.port);
});

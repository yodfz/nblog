/**
 * author:yodfz create:2017-5-2 22:55
 * 界面渲染路由
 * @type {{}}
 */
var router = require('koa-router')();
var path = require("path");
var template = require('art-template');

router.get('/login', ctx=> {
    ctx.body = template(path.resolve(__dirname, '../template/login.html'), {
        user:{'name': 'Hello World'}
    });
});


router.get('/manage', ctx=> {
    ctx.body = template(path.resolve(__dirname, '../template/manage/index.html'), {
    });
});


module.exports = router;
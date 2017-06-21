/**
 * author:yodfz create:2017-5-2 22:55
 * 界面渲染路由
 * @type {{}}
 */
var router = require('koa-router')();
var path = require("path");
var template = require('art-template');
var $config = require('../config');
var model = require('../model');
router.get('/login', ctx=> {
    ctx.body = template(path.resolve(__dirname, '../template/login.html'), {
        user:{'name': 'Hello World'}
    });
});

router.get('/',async (ctx)=> {
    let data = await model.article.findAndCountAll({
        offset: 0,
        limit: $config.pageSize,
        order: [['idx', 'DESC']]
    });
    template.defaults.imports.Date = Date;
    ctx.body = template(path.resolve(__dirname, '../template/index.html'), {
        config:$config.web,
        article:data
    });
});


router.get('/manage*', ctx=> {
    ctx.body = template(path.resolve(__dirname, '../template/manage/index.html'), {
    });
});


module.exports = router;
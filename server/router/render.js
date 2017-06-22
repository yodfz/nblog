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
var marked = require('marked');
template.defaults.minimize = true;
router.get('/login', ctx=> {
    ctx.body = template(path.resolve(__dirname, '../template/login.html'), {
        user: {'name': 'Hello World'}
    });
});

router.get('/', async (ctx)=> {
    let data = await model.article.findAndCountAll({
        offset: 0,
        limit: $config.pageSize,
        order: [['idx', 'DESC']]
    });
    let photoData = await model.photo.findAndCountAll({
        offset: 0,
        limit: 12,
        order: [['idx', 'DESC']]
    });
    template.defaults.imports.Date = Date;
    ctx.body = template(path.resolve(__dirname, '../template/index.html'), {
        config: $config.web,
        article: data,
        photo: photoData
    });
});


router.get('/manage*', ctx=> {
    if (ctx.session.isLogin) {
        ctx.body = template(path.resolve(__dirname, '../template/manage/index.html'), {});
    } else {
        // 重定向到登陆页
        ctx.redirect('/login');
    }
});

router.get('/detail/:id/:title', async ctx=> {
    let data = await model.article.findOne({where: {idx: ctx.params.id}});
    if (data) {
        data.viewCount += 1;
        $data = await model.article.update({viewCount: data.viewCount}, {
            where: {idx: data.idx}
        });
        template.defaults.imports.Date = Date;
        data.content = marked(data.content);
        ctx.body = template(path.resolve(__dirname, '../template/article_detail.html'), {
            config: $config.web,
            data: data
        });
    } else {
        ctx.body = template(path.resolve(__dirname, '../template/404.html'), {
            config: $config.web
        });
    }

});

router.get('/article/:pageIndex', ctx=> {
    ctx.body = 'test';
});

router.get('/photo/:pageIndex', ctx=> {
    ctx.body = 'test';
});

router.get('/photoDetail/:idx', ctx=> {
    ctx.body = 'test';
});


module.exports = router;
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
    let hotarticle = await model.article.findAndCountAll({
        offset: 0,
        limit: 10,
        order: [['viewCount', 'DESC']]
    });
    template.defaults.imports.Date = Date;
    ctx.body = template(path.resolve(__dirname, '../template/index.html'), {
        config: $config.web,
        article: data,
        photo: photoData,
        hotarticle:hotarticle
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

router.get('/article', ctx=> {
    ctx.redirect('/article/1');
});

router.get('/photo', ctx=> {
    ctx.redirect('/photo/1');
});

router.get('/article/:pageIndex', async ctx=> {

    let pageIndex = ctx.params.pageIndex || 1;

    let data = await model.article.findAndCountAll({
        offset: (pageIndex - 1) * $config.pageSize,
        limit: $config.pageSize,
        order: [['idx', 'DESC']]
    });
    let hotarticle = await model.article.findAndCountAll({
        offset: 0,
        limit: 10,
        order: [['viewCount', 'DESC']]
    });
    let count = await model.article.count();
    let pageCount = Math.ceil(count / $config.pageSize);
    template.defaults.imports.Date = Date;
    ctx.body = template(path.resolve(__dirname, '../template/article.html'), {
        config: $config.web,
        article: data,
        pageCount: pageCount,
        pageIndex: pageIndex,
        hotarticle:hotarticle
    });
});

router.get('/photo/:pageIndex',async ctx=> {
    let pageIndex = ctx.params.pageIndex || 1;
    let data = await model.photo.findAndCountAll({
        offset: (pageIndex - 1) * 20,
        limit: 20,
        order: [['idx', 'DESC']]
    });
    let count = await model.photo.count();
    let pageCount = Math.ceil(count / $config.pageSize);
    template.defaults.imports.Date = Date;
    ctx.body = template(path.resolve(__dirname, '../template/photo.html'), {
        config: $config.web,
        data: data,
        pageCount: pageCount,
        pageIndex: pageIndex
    });
});

router.get('/photoDetail/:idx.html',async ctx=> {
    let data = await model.photo.findOne({where: {idx: ctx.params.idx}});
    if (data) {

        template.defaults.imports.Date = Date;
        ctx.body = template(path.resolve(__dirname, '../template/photo_detail.html'), {
            config: $config.web,
            data: data
        });
    } else {
        ctx.body = template(path.resolve(__dirname, '../template/404.html'), {
            config: $config.web
        });
    }
});


module.exports = router;
/**
 * author:yodfz create:2017-5-27
 * api路由
 * @type {{}}
 */
var createMessage = require('../core/createMessage');
var $config = require('../config');
var controller_api_article = require('../controller/api/article');
var controller_api_upload = require('../controller/api/upload');
var controller_api_photo = require('../controller/api/photo');
var router = require('koa-router')();
const apiPre = $config.apiPre;
router.get(apiPre + 'article', async (ctx)=> {
    let data = await controller_api_article.list(ctx.request.query.pageIndex || 1, ctx.request.query.key);
    ctx.body = createMessage(data.rows, {total: data.total});
});
router.post(apiPre + 'article/save', async (ctx)=> {
    let data = ctx.request.body;
    let $data = await controller_api_article.save(data);
    if ($data.errorNo == 1) {
        ctx.body = createMessage({}, {}, 2, $data.info);
    } else {
        ctx.body = createMessage($data, {});
    }
});
router.post(apiPre + 'article/delete', async (ctx)=> {
    let data = ctx.request.body.idx;
    if (data) {
        let $data = await controller_api_article.delete(data);
        ctx.body = createMessage($data, {});
    } else {
        ctx.body = createMessage({}, {}, 3, '参数idx为空');
    }
});

router.get(apiPre + 'photo', async (ctx)=> {
    let data = await controller_api_photo.list(ctx.request.query.pageIndex || 1, ctx.request.query.key);
    ctx.body = createMessage(data.rows, {total: data.total});
});
router.post(apiPre + 'photo/save', async (ctx)=> {
    let data = ctx.request.body;
    if (!data.img) {
        ctx.body = createMessage({}, {}, 1, '图片不得为空');
        return;
    }
    let $data = await controller_api_photo.save(data);
    if ($data.errorNo == 1) {
        ctx.body = createMessage({}, {}, 2, $data.info);
    } else {
        ctx.body = createMessage($data, {});
    }
});
router.post(apiPre + 'photo/delete', async (ctx)=> {
    let data = ctx.request.body.idx;
    if (data) {
        let $data = await controller_api_photo.delete(data);
        ctx.body = createMessage($data, {});
    } else {
        ctx.body = createMessage({}, {}, 3, '参数idx为空');
    }
});

router.post(apiPre + 'upload', async (ctx)=> {
    var data = controller_api_upload.index(ctx);
    if (data) {
        ctx.body = createMessage(data.url);
    } else {
        ctx.body = createMessage({}, {}, 1, '图片上传失败');
    }
});

router.post(apiPre + 'login', async (ctx) => {
    var requestData = ctx.request.body.fields;
    if (requestData.username === 'admin' && requestData.password === '123456') {
        ctx.body = createMessage({
            redirectUrl: 'http://localhost:3900/manage'
        });
    } else {
        ctx.body = createMessage({}, {}, '911', '账户名或密码错误');
    }
});

module.exports = router;
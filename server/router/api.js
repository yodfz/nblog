/**
 * author:yodfz create:2017-5-27
 * api路由
 * @type {{}}
 */
var createMessage = require('../core/createMessage');
var $config = require('../config');
var controller_api_article = require('../controller/api/article');
var controller_api_upload = require('../controller/api/upload');
var router = require('koa-router')();
const apiPre = $config.apiPre;
router.get(apiPre + 'article', async (ctx)=> {
    // const data = yield controller_api_article.list();
    // ctx.body = createMessage(
    //     {
    //         data: data.rows,
    //         total: data.total
    //     }
    // );
    console.log(ctx.request.query);
    let data = await controller_api_article.list(ctx.request.query.pageIndex || 1, ctx.request.query.key);
    // controller_api_article.list().then(data=> {
    ctx.body = createMessage(data.rows, {total: data.total});
    // })
});

router.post(apiPre + 'article/save', async (ctx)=> {
    let data = ctx.request.body;
    // if (!data.title) {
    //     ctx.body = createMessage({}, {}, 1, '标题不得为空!');
    //     return;
    // }
    // if (!data.content) {
    //     ctx.body = createMessage({}, {}, 1, '正文内容不得为空!');
    //     return;
    // }
    let $data = await controller_api_article.save(data);
    if ($data.errorNo == 1) {
        ctx.body = createMessage({}, {}, 2, $data.info);
    } else {
        ctx.body = createMessage($data, {});
    }
});

router.post(apiPre + 'upload', async (ctx)=> {
    // const data = yield controller_api_article.list();
    // ctx.body = createMessage(
    //     {
    //         data: data.rows,
    //         total: data.total
    //     }
    // );
    // let data = await controller_api_article.list();
    // controller_api_article.list().then(data=> {
    var data = controller_api_upload.index(ctx);
    if (data) {
        ctx.body = createMessage(data.url);
    } else {
        ctx.body = createMessage({}, {}, 1, '图片上传失败');
    }
    // })
});

module.exports = router;
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
var controller_api_system = require('../controller/api/system');
var model = require('../model');
var router = require('koa-router')();
const apiPre = $config.apiPre2;
router.get(apiPre + 'article', async (ctx)=> {
    let data = await controller_api_article.list(ctx.request.query.pageIndex || 1, ctx.request.query.tag || '', ctx.request.query.key || '', ctx.request.query.sort || undefined);
    ctx.body = createMessage(data.rows, {total: data.total});
});
module.exports = router;
/**
 * author:yodfz create:2017-5-27
 * api路由
 * @type {{}}
 */
var createMessage = require('../core/createMessage');
var $config = require('../config');
var controller_api_article = require('../controller/api/article');
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
    let data = await controller_api_article.list();
    // controller_api_article.list().then(data=> {
    ctx.body = createMessage(data.rows, {total: data.total});
    // })
});

module.exports = router;
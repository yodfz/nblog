/**
 * author:yodfz create:2017-5-27
 * api路由
 * @type {{}}
 */
var createMessage = require('../core/createMessage');
var router = require('koa-router')();
var apiPre = '/api/v1/';
router.get(apiPre + 'article', ctx=> {
    ctx.body = createMessage([]);
});

module.exports = router;
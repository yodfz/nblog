/**
 * author:yodfz create:2017-5-27
 * api路由
 * @type {{}}
 */
var createMessage = require('../core/createMessage');
var $config = require('../config');
var router = require('koa-router')();
const apiPre = $config.apiPre;
router.get(apiPre + 'article', ctx=> {
    ctx.body = createMessage([]);
});

module.exports = router;
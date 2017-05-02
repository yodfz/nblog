/**
 * author:yodfz create:2017-5-2 22:55
 * 界面渲染路由
 * @type {{}}
 */
var router = require('koa-router')();

router.get('/', ctx=> {
    ctx.body = 'Hello KOA2,this is Test Code.';
});


module.exports = router;
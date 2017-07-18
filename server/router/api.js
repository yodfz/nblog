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
const apiPre = $config.apiPre;
router.get(apiPre + 'article', async (ctx)=> {
    let data = await controller_api_article.list(ctx.request.query.pageIndex || 1, ctx.request.query.key);
    ctx.body = createMessage(data.rows, {total: data.total});
});
router.post(apiPre + 'article/save', async (ctx)=> {
    if (ctx.session.isLogin || true) {
        let data = ctx.request.body;
        let $data = await controller_api_article.save(data);
        if ($data.errorNo == 1) {
            ctx.body = createMessage({}, {}, 2, $data.info);
        } else {
            ctx.body = createMessage($data, {});
        }
    } else {
        ctx.body = '';
        ctx.status = 401;
    }

});
router.post(apiPre + 'article/delete', async (ctx)=> {
    if (!ctx.session.isLogin) {
        ctx.body = '';
        ctx.status = 401;
        return;
    }
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
    if (!ctx.session.isLogin) {
        ctx.body = '';
        ctx.status = 401;
        return;
    }
    let data = ctx.request.body;
    if (!data.url) {
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
    if (!ctx.session.isLogin) {
        ctx.body = '';
        ctx.status = 401;
        return;
    }
    let data = ctx.request.body.idx;
    if (data) {
        let $data = await controller_api_photo.delete(data);
        ctx.body = createMessage($data, {});
    } else {
        ctx.body = createMessage({}, {}, 3, '参数idx为空');
    }
});

router.post(apiPre + 'system/updatepassword', async (ctx)=> {
    if (!ctx.session.isLogin) {
        ctx.body = '';
        ctx.status = 401;
        return;
    }
    let data = ctx.request.body;
    if (data.oldPassword && data.newPassword1 && data.newPassword2) {
        if (data.newPassword1 != data.newPassword2) {
            ctx.body = createMessage({}, {}, 1, '两次输入的新密码不一致!');
        } else {
            let user = await model.user.findOne({where: {user: ctx.session.loginUser}});
            if (user && user.pwd === data.oldPassword) {
                $data = await model.user.update({pwd: data.newPassword2}, {
                    where: {idx: user.idx}
                });
                ctx.body = createMessage({}, {}, 0, '修改密码成功');
            } else {
                ctx.body = createMessage({}, {}, 2, '修改密码失败');
            }
        }
    } else {
        ctx.body = createMessage({}, {}, 1, '修改密码失败');
    }
});

router.post(apiPre + 'system/bakDb', async (ctx)=> {
    if (!ctx.session.isLogin) {
        ctx.body = '';
        ctx.status = 401;
        return;
    }
    let $data = await controller_api_system.bakDb();
    ctx.body = createMessage({}, {}, ($data == 'SUCCESS' ? 3 : 0), $data);
});

router.get(apiPre + 'system/dbInfo', async (ctx)=> {
    ctx.body = createMessage(controller_api_system.getDbInfo(), {});
});

router.post(apiPre + 'upload', async (ctx)=> {
    if (!ctx.session.isLogin) {
        ctx.body = '';
        ctx.status = 401;
        return;
    }
    var data = controller_api_upload.index(ctx);
    if (data) {
        ctx.body = createMessage(data.url);
    } else {
        ctx.body = createMessage({}, {}, 1, '图片上传失败');
    }
});

router.post(apiPre + 'login', async (ctx) => {
    var requestData = ctx.request.body.fields;
    if (requestData.username && requestData.password) {
        let user = await model.user.findOne({where: {user: requestData.username}});
        if (user && user.pwd === requestData.password) {
            ctx.session.isLogin = true;
            ctx.session.loginUser = user.user;
            ctx.body = createMessage({
                redirectUrl: '/manage'
            });
            return;
        }
    }
    ctx.body = createMessage({}, {}, '911', '账户名或密码错误');
});

module.exports = router;
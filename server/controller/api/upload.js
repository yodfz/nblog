/**
 * 涉及文件上传
 * @type {{index: module.exports.'index'}}
 */
const fs = require('fs');
const path = require('path');
const model = require('../../model');
const $config = require('../../config');
module.exports = {
    'index': function (ctx) {
        // console.log(ctx.request.body);
        if (ctx.request.body.files) {
            const file = ctx.request.body.files.file;
            // console.log(file);
            var tmparr = file['name'].split('.');
            var ext = '.' + tmparr[tmparr.length - 1];
            var nowdate = new Date();
            var $path = __dirname + '/../../public/upload/' +
                nowdate.getFullYear() +
                ((nowdate.getMonth() + 1) < 10 ? '0' : '') + (nowdate.getMonth() + 1) +
                (nowdate.getDate() < 10 ? '0' : '') + nowdate.getDate();
            if (!fs.existsSync($path)) {
                fs.mkdirSync($path);
            }
            var ph = path.join($path,
                Date.parse(new Date()).toString() + ext);

            const reader = fs.createReadStream(file.path);
            const stream = fs.createWriteStream(ph);
            reader.pipe(stream);
            // 类型判断
            const picExt = ['.jpg', '.jpeg', '.png'];
            const zipExt = ['.zip', '.7zip'];
            if (picExt.indexOf(ext.toLowerCase()) > -1) {
                // 制作缩略图
            }
            if(zipExt.indexOf(ext.toLowerCase())>-1){
                // 释放到静态目录中的 case 中 做模版样例
            }
            // console.log('uploading %s -> %s', file.name, stream.path);
            return {url: ph.replace(path.join(__dirname, '/../../public/'), '/')};
        } else {
            return null;
        }

    }
};
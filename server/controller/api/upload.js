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
            var ph = path.join('public/upload', Date.parse(new Date()).toString() + ext);

            const reader = fs.createReadStream(file.path);
            const stream = fs.createWriteStream(ph);
            reader.pipe(stream);
            // console.log('uploading %s -> %s', file.name, stream.path);
            return {url: ph.replace('public/', '/')};
        } else {
            return null;
        }

    }
};
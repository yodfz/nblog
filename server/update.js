var model = require('./model');
const sharp = require('sharp');
var path = require('path');

// 升级数据库图片至压缩图片
const fn = async () => {
    const data = await model.photo.findAll();
    data.map(p=> {
        var ph = __dirname + '/public/' + p.url.replace('http://www.yodfz.com/','');
        var phsplit = ph.split('.');
        var ext = '.' + phsplit[phsplit.length - 1];
        console.log(ph);
        // 制作缩略图
        sharp(ph).resize(300).toFile(ph.replace(ext, '_thumb' + ext), (err, info)=> {
            console.log(err, info);
        });
    });
};
fn();
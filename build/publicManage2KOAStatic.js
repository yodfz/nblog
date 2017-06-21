var webpack = require('webpack');
var webpackconfig = require('./webpack.pc.config');
var fsex = require('fs-extra');
var path = require('path');
var ora = require('ora');


var spinner = ora('正在打包项目中,请稍后...');
spinner.start();

webpack(webpackconfig, (err, status)=> {
    // console.log(err);
    // copy文件
    spinner.succeed('webpack编译完成');
    spinner.color = 'green';
    spinner.text = '部署文件至server目录';
    let $path = webpackconfig.output.path;
    let $tmppath = path.join(__dirname);
    // console.log($path);
    fsex.copySync($path, $tmppath + '/../server/public/');
    fsex.copySync($tmppath + '/../PC_client/static', $tmppath + '/../server/public/static');
    fsex.copySync($tmppath + '/../PC_client/config.js', $tmppath + '/../server/public/config.js');
    fsex.removeSync($tmppath + '/../server/public/' + '/index.html');
    fsex.copySync($path + 'index.html', $tmppath + '/../server/template/manage/index.html');
    spinner.succeed('部署完成');
    spinner.stop();
});


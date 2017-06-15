var Sequelize = require('sequelize');
var $config = require('../config');
var sequelize = new Sequelize($config.db.database, $config.db.uid, $config.db.pwd, {
    host: $config.db.url,
    dialect: 'sqlite',//'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    //
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    // },

    // 仅 SQLite 适用
    storage: $config.db.url
});
const fs = require('fs');
const opt = {
    // 是否初始化数据表
    force: $config.db.resetDB
};

var db = {};
var files = fs.readdirSync(__dirname + '/./');
const killFile = ['index'];
files.map(file=> {
    let filename = file.split('.')[0];
    if (killFile.indexOf(filename) == -1) {
        db[filename] = require('./' + filename)(sequelize, Sequelize);
        db[filename].sync(opt);
    }
});
module.exports = db;

// var article = require('./article')(sequelize);


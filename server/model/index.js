var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',//'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    //
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    // },

    // 仅 SQLite 适用
    storage: __dirname + '/../db/index.sqlite'
});
const fs = require('fs');

var db = {};
fs.readdir('./', (error, files)=> {
    const killFile = ['index'];
    files.map(file=> {
        console.log(file);
        let filename = file.split('.')[0];
        if (killFile.indexOf(filename) == -1) {
            db[filename] = require('./' + filename)(sequelize, Sequelize);
        }
    });
});

console.log(db);

// var article = require('./article')(sequelize);


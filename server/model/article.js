// var User = sequelize.define('user', {
//     firstName: {
//         type: Sequelize.STRING,
//         field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//     },
//     lastName: {
//         type: Sequelize.STRING
//     }
// }, {
//     freezeTableName: true // Model 对应的表名将与model名相同
// });
//
// User.sync({force: true}).then(function () {
//     // 已创建数据表
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });

module.exports = (sequelize, SQ)=> {
    return sequelize.define('article', {
        // {indexes: [{unique: true, fields: ['someUnique']}]},
        idx: {type: SQ.INTEGER, primaryKey: true},//SQ.INTEGER,
        title: SQ.STRING,
        content: SQ.TEXT,
        tag: SQ.STRING,
        createDate: {type: SQ.DATE, defaultValue: SQ.NOW},
    }, {
        freezeTableName: true // Model 对应的表名将与model名相同
    });
};
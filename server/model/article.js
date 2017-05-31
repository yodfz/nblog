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
/**
 * 文章表
 * @param sequelize  已经new的sequelize
 * @param SQ    Sequelize全局对象
 * @returns {*}
 */
module.exports = (sequelize, SQ)=> {
    return sequelize.define('article', {
        // {indexes: [{unique: true, fields: ['someUnique']}]},
        // idx
        idx: {type: SQ.INTEGER, primaryKey: true},//SQ.INTEGER,
        // 标题
        title: SQ.STRING,
        // 正文内容
        content: SQ.TEXT,
        // 标签
        tag: SQ.STRING,
        // 类别
        category:SQ.STRING,
        // 创建时间
        createDate: {type: SQ.DATE, defaultValue: SQ.NOW},
    }, {
        freezeTableName: true // Model 对应的表名将与model名相同
    });
};
/**
 * 用户表
 * @param sequelize  已经new的sequelize
 * @param SQ    Sequelize全局对象
 * @returns {*}
 */
module.exports = (sequelize, SQ)=> {
    return sequelize.define('user', {
        // {indexes: [{unique: true, fields: ['someUnique']}]},
        // idx
        idx: {type: SQ.INTEGER, primaryKey: true},//SQ.INTEGER,
        // 标题
        user: SQ.STRING,
        // 正文内容
        pwd: SQ.STRING,
        // 等级
        level: SQ.INTEGER,
        // 创建时间
        createDate: {type: SQ.DATE, defaultValue: SQ.NOW},
    }, {
        freezeTableName: true // Model 对应的表名将与model名相同
    });
};
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
        // 头像
        avatar:SQ.STRING,
        // 登陆账号
        user: SQ.STRING,
        // 登陆密码
        pwd: SQ.STRING,
        // 等级
        // -1 超级管理员 0 普通管理员 1 普通用户
        level: SQ.INTEGER,
        // 创建时间
        createDate: {type: SQ.DATE, defaultValue: SQ.NOW},
    }, {
        freezeTableName: true // Model 对应的表名将与model名相同
    });
};
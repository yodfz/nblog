/**
 * 评论表
 * @param sequelize  已经new的sequelize
 * @param SQ    Sequelize全局对象
 * @returns {*}
 */
module.exports = (sequelize, SQ)=> {
    return sequelize.define('comment', {
        // {indexes: [{unique: true, fields: ['someUnique']}]},
        // idx
        idx: {type: SQ.INTEGER, primaryKey: true},//SQ.INTEGER,
        // 标题
        content: SQ.STRING,
        userId: SQ.INTEGER
    }, {
        freezeTableName: true // Model 对应的表名将与model名相同
    });
};
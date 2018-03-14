/**
 * 一句话表
 * @param sequelize  已经new的sequelize
 * @param SQ    Sequelize全局对象
 * @returns {*}
 */
module.exports = (sequelize, SQ)=> {
    return sequelize.define('photo', {
        // {indexes: [{unique: true, fields: ['someUnique']}]},
        // idx
        idx: {type: SQ.INTEGER, primaryKey: true, autoIncrement: true},//SQ.INTEGER,
        title: SQ.STRING,
        // 图片地址
        url: SQ.STRING,
        // 更多的描述
        description: SQ.STRING
    }, {
        freezeTableName: true // Model 对应的表名将与model名相同
    });
};
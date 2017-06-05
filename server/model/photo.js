/**
 * 相册表
 * @param sequelize  已经new的sequelize
 * @param SQ    Sequelize全局对象
 * @returns {*}
 */
module.exports = (sequelize, SQ)=> {
    return sequelize.define('photo', {
        // {indexes: [{unique: true, fields: ['someUnique']}]},
        // idx
        idx: {type: SQ.INTEGER, primaryKey: true},//SQ.INTEGER,
        // 图片地址
        url: SQ.STRING,
        // 描述
        description: SQ.STRING,
        small: SQ.STRING,
        size: SQ.INTEGER
    }, {
        freezeTableName: true // Model 对应的表名将与model名相同
    });
};
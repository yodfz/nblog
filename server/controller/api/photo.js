/**
 * 文章接口
 * @type {{create: (()), list: (()), delete: (()), update: (())}}
 */
var model = require('../../model');
var $config = require('../../config');
module.exports = {
    save: async function (data) {
        let isCreate = (!data.idx || data.idx <= 0);
        // try {
        let $data = null;
        if (isCreate) {
            delete data.idx;
            $data = await model.photo.create(data, {isNewRecord: true});
        } else {
            let updateData = Object.assign({}, data);
            delete updateData.idx;
            $data = await model.photo.update(updateData, {
                where: {idx: data.idx}
            });
        }
        console.log($data);
        return $data;
        // } catch (err) {
        //     return {info: '数据库操作失败', errorNo: 1};
        // }

    },
    list: async function (pageIndex = 1, key = '') {
        let search = (key ? {title: {$like: `%${key}%`}} : {});
        let data = await model.photo.findAndCountAll({
            where: search,
            offset: (pageIndex - 1) * $config.pageSize,
            limit: $config.pageSize,
            order: [['idx', 'DESC']]
        });
        return ({rows: data.rows, total: data.count});
    },
    delete: async function ($id) {
        let data = await model.photo.destroy({
            where: {
                idx: $id
            },
            truncate: true /* this will ignore where and truncate the table instead */
        });
        return data;
    },
    update () {

    },

};
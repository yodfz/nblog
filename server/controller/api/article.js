/**
 * 文章接口
 * @type {{create: (()), list: (()), delete: (()), update: (())}}
 */
var model = require('../../model');
var $config = require('../../config');
module.exports = {
    create () {

    },
    list: async function (pageIndex = 1, search = {}) {
        let data = await model.article.findAndCountAll({
            where: search,
            offset: (pageIndex - 1) * $config.pageSize,
            limit: $config.pageSize
        });
        return ({rows: data.rows, total: data.count});

        // return
        // //使用sequelize中的findAndCountAll（）方法
        // Article.//自己定义的模型
        // findAndCountAll({
        //     where:'',//为空，获取全部，也可以自己添加条件
        //     offset:(page - 1) * pageSize,//开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
        //     limit:pageSize//每页限制返回的数据条数
        // }).then(function(article){
        //     if(article.length!=0){
        //         console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        //         console.log(article);
        //         res.send(res,{rows:article.rows,total:article.count});
        //     }else{
        //         utils.send(res,{
        //             err:'没有找到文章，请先创建'
        //         })
        //     }
        // })
    },
    delete () {

    },
    update () {

    },

};
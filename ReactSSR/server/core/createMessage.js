/**
 * author:yodfz create:2017-5-27
 * 创建返回数据结构
 *
 */

module.exports = function(data, opt, errorNo = 0, errorMessage = '') {
    return Object.assign({}, {errorNo: errorNo, errorMessage: errorMessage, data: data||[]}, opt);
};
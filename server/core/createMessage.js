/**
 * author:yodfz create:2017-5-27
 * 创建返回数据结构
 *
 */

module.exports = (data, errorNo = 0, errorMessage = '')=> {
    return {errorNo: errorNo, errorMessage: errorMessage, data: data};
};
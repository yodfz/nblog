import {ADD_ARTICLE, GET_ARTICLE_LIST, SELECT_ARTICLE} from '../actionsType';

const addArticle = function () {

};

/**
 * 列表选中文章
 * @param $id 被选中文章的id
 * @returns {{type, payLoad: {id: *}}}
 */
const selectArticle = ($id)=> {
    return {type: SELECT_ARTICLE, payLoad: {id: $id}};
};

/**
 * 获取远程数据链接
 * @param $pageIndex
 * @returns {{type, payLoad: {pageIndex: *}}}
 */
const getArticle = ($pageIndex) => {
    return {type: GET_ARTICLE_LIST, payLoad: {pageIndex: $pageIndex}};
};

export {
    addArticle,
    selectArticle,
    getArticle
}
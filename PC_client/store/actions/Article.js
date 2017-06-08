import {ADD_ARTICLE, SAVE_ARTICLE, GET_ARTICLE_LIST, SELECT_ARTICLE, REMOVE_ARTICLE} from '../actionsType';
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
const getArticle = ($pageIndex, $key) => {
    return {type: GET_ARTICLE_LIST, payLoad: {pageIndex: $pageIndex, key: $key}};
};

/**
 * 新建文章
 * @returns {{type, payLoad: {}}}
 */
const addArticle = () => {
    return {type: ADD_ARTICLE, payLoad: {}};
};

/**
 * 保存文章
 */
const saveArticle = ($data) => {
    console.log($data);
    return {type: SAVE_ARTICLE, payLoad: {data: $data}};
};

/**
 * 删除文章
 * @param $idx
 * @returns {{type, payLoad: *}}
 */
const deleteArticle = ($idx)=> {
    return {type: REMOVE_ARTICLE, payLoad: $idx};
};

export {
    addArticle,
    deleteArticle,
    selectArticle,
    getArticle,
    saveArticle
}
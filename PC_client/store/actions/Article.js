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


export {
    addArticle,
    selectArticle
}
import {watchGetArticleList, watchSaveArticle,wathcDeleteArticle} from './article';
import {fork} from 'redux-saga/effects';
export default [watchGetArticleList, watchSaveArticle,wathcDeleteArticle];

export function* sagas () {
    yield [
        fork(watchGetArticleList),
        fork(watchSaveArticle),
        fork(wathcDeleteArticle)
    ];
};
import {watchGetArticleList, watchSaveArticle} from './article';
import {fork} from 'redux-saga/effects';
export default [watchGetArticleList, watchSaveArticle];

export function* sagas () {
    yield [
        fork(watchGetArticleList),
        fork(watchSaveArticle)
    ];
};
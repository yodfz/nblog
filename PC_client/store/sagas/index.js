import {watchGetArticleList} from './article';
import {fork} from 'redux-saga/effects';
export default [watchGetArticleList];

export function* sagas () {
    yield [
        fork(watchGetArticleList)
    ];
};
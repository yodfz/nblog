import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import * as actions from '../actionsType';
import services from '../../services';

export function* GetArticleList (action) {
    yield* put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.FETCHING}});
    const data = yield call(services.article_list, action.payLoad.pageIndex);
    yield* put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.SUCCESS}});
    yield* put({type: actions.APPEND_ARTICLE_LIST, payLoad: {data: data}});
}

/**
 * 监听请求数据事件
 */
export function* watchGetArticleList () {
    yield * takeEvery(actions.GET_ARTICLE_LIST, GetArticleList);
}
import {takeEvery} from 'redux-saga'
import {put, call, fork} from 'redux-saga/effects'
import * as actions from '../actionsType';
import services from '../../services';

export function* GetArticleList (action) {
    console.log('GETARTICLELIST SAGA', action);
    yield* put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.FETCHING}});
    const data = yield fork(services.article_list, action.payLoad.pageIndex);
    yield* put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.SUCCESS}});
    yield* put({type: actions.APPEND_ARTICLE_LIST, payLoad: {data: data}});
}

/**
 * 监听请求数据事件
 */
export function* watchGetArticleList () {
    console.log('watchGetArticleList');
    yield* takeEvery(actions.GET_ARTICLE_LIST, GetArticleList);
}
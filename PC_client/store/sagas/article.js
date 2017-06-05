import {takeEvery} from 'redux-saga'
import {put, call, fork} from 'redux-saga/effects'
import * as actions from '../actionsType';
import services from '../../services';

export function* GetArticleList (action) {
    yield put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.FETCHING}});
    let data = yield call(services.article_list, {pageIndex:action.payLoad.pageIndex});
    data = data.data;
    if (data.errorNo == 0) {
        yield put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.SUCCESS}});
        yield put({type: actions.APPEND_ARTICLE_LIST, payLoad: {data: data.data}});
    } else {
        yield put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.ERROR}});
    }

}

/**
 * 监听请求数据事件
 */
export function* watchGetArticleList () {
    yield* takeEvery(actions.GET_ARTICLE_LIST, GetArticleList);
}
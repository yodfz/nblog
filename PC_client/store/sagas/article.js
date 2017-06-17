import {takeEvery} from 'redux-saga'
import {put, call, fork} from 'redux-saga/effects'
import * as actions from '../actionsType';
import services from '../../services';

/**
 * 监听请求数据事件
 */
export function* watchGetArticleList () {
    yield takeEvery(actions.GET_ARTICLE_LIST, function*  (action) {
        yield put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.FETCHING}});
        console.log(action);
        let data = yield call(services.article_list, {pageIndex: action.payLoad.pageIndex, key: action.payLoad.key?action.payLoad.key:null});
        data = data.data;
        if (!action.payLoad.pageIndex || action.payLoad.pageIndex <= 1) {
            yield put({type: actions.CLEAR_ARTICLE});
        }
        if (data.errorNo == 0) {
            yield put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.SUCCESS}});
            yield put({type: actions.APPEND_ARTICLE_LIST, payLoad: {data: data.data}});
            yield put({type: actions.UPDATE_ARTICLE_PAGEINDEX, payLoad: action.payLoad.pageIndex||1});

        } else {
            yield put({type: actions.UPDATE_ARTICLE_STATE, payLoad: {state: actions.STATE.ERROR}});
        }

    });
}
export function* watchSaveArticle () {
    yield takeEvery(actions.SAVE_ARTICLE, function*  (action) {
        yield put({type: actions.UPDATE_ARTICLE_SAVEING, payLoad: actions.STATE.FETCHING});
        let data = yield call(services.article_save, action.payLoad.data);
        data = data.data;
        if (data.errorNo == 0) {
            yield put({type: actions.UPDATE_ARTICLE_SAVEING, payLoad: actions.STATE.SUCCESS});
            // 更新列表中数据
            yield put({type: actions.UPDATE_ARTICLE_DETAIL, payLoad: {data: action.payLoad.data}});
        } else {
            yield put({type: actions.UPDATE_ARTICLE_SAVEING, payLoad: data.errorMessage});
        }
    });
}

export function* wathcDeleteArticle () {
    yield takeEvery(actions.REMOVE_ARTICLE, function* (action) {
        let data = yield call(services.article_delete, {idx:action.payLoad});
        if (data.data.errorNo == 0) {
            yield put({type: actions.REMOVE_ARTICLE_INLIST, payLoad: action.payLoad});
        }
        // yield put({type:actions.REMOVE_ARTICLE,payLoad:})
    });
}
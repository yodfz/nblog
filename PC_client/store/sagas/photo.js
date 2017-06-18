import {takeEvery} from 'redux-saga'
import {put, call, fork} from 'redux-saga/effects'
import * as actions from '../actionsType';
import services from '../../services';
/*
 * 监听保存请求
 */
export function* watchSavePhoto () {
    yield takeEvery(actions.SAVE_PHOTO_DETAIL, function* (action) {
        yield put({type: actions.UPDATE_PHOTO_DETAIL_STATUS, payLoad: actions.STATE.FETCHING});
        let data = yield call(services.photo_save, action.payLoad);
        data = data.data;
        if (data.errorNo == 0) {
            yield put({type: actions.UPDATE_PHOTO_DETAIL_STATUS, payLoad: actions.STATE.SUCCESS});
            // 更新列表中数据
            yield put({type: actions.UPDATE_PHOTO_DETAIL, payLoad: {data: action.payLoad.data}});
        } else {
            yield put({type: actions.UPDATE_PHOTO_DETAIL_STATUS, payLoad: data.errorMessage});
        }
    });
}

export function* watchPhotoList () {
    yield takeEvery(actions.GET_ARTICLE_LIST, function* (action) {
        yield  put({type: actions.UPDATE_PHOTO_LIST_STATUS, payLoad: actions.STATE.FETCHING});
        let data = yield call(services.photo_list, action.payLoad);
        data = data.data;
        if (!action.payLoad.pageIndex || action.payLoad.pageIndex <= 1) {
            // yield put({type: actions.CLEAR_ARTICLE});
        }
        if (data.errorNo == 0) {
            yield put({type: actions.APPEND_PHOTO_LIST, payLoad: {data: data.data}});
        } else {

        }
    });
}

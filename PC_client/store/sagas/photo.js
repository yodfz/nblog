import {takeEvery} from 'redux-saga'
import {put, call, fork} from 'redux-saga/effects'
import * as actions from '../actionsType';
import services from '../../services';
/*
 * 监听保存请求
 */
export function* watchSavePhoto () {
    yield takeEvery(actions.SAVE_PHOTO_DETAIL, function* (action) {
        try {
            yield put({type: actions.UPDATE_PHOTO_DETAIL_STATUS, payLoad: actions.STATE.FETCHING});
            let data = yield call(services.photo_save, action.payLoad);
            data = data.data;
            if (data.errorNo == 0) {
                yield put({type: actions.UPDATE_PHOTO_DETAIL_STATUS, payLoad: actions.STATE.SUCCESS});
                // 更新列表中数据
                yield put({type: actions.APPEND_PHOTO_DETAIL_FOR_LIST, payLoad: {data: data.data}});
            } else {
                yield put({type: actions.UPDATE_PHOTO_DETAIL_STATUS, payLoad: data.errorMessage});
            }
        } catch (err) {
            yield put({type: actions.UPDATE_PHOTO_DETAIL_STATUS, payLoad: actions.STATE.ERROR});
        }
    });
}

export function* watchPhotoList () {
    yield takeEvery(actions.GET_PHOTO_LIST, function* (action) {
        try {
            yield  put({type: actions.UPDATE_PHOTO_LIST_STATUS, payLoad: actions.STATE.FETCHING});
            let data = yield call(services.photo_list, action.payLoad);
            data = data.data;
            if (!action.payLoad.pageIndex || action.payLoad.pageIndex <= 1) {
                yield put({type: actions.CLEAR_PHOTO_LIST});
            }
            if (data.errorNo == 0) {
                yield put({type: actions.UPDATE_PHOTO_LIST_STATUS, payLoad: actions.STATE.SUCCESS});
                yield put({type: actions.APPEND_PHOTO_LIST, payLoad: {data: data.data}});
            } else {
                yield  put({type: actions.UPDATE_PHOTO_LIST_STATUS, payLoad: actions.STATE.ERROR});
            }
        } catch (err) {
            yield  put({type: actions.UPDATE_PHOTO_LIST_STATUS, payLoad: actions.STATE.ERROR});
        }
    });
}

import {UPDATE_SYSTEM_PASSWORD, UPDATE_SYSTEM_PASSWORD_STATUS, STATE} from '../actionsType';
import {put, call, fork} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga'
import services from '../../services';

export function* watchUpdatePassword () {
    // UPDATE_SYSTEM_PASSWORD
    yield takeEvery(UPDATE_SYSTEM_PASSWORD, function* (action) {
        yield put({type: UPDATE_SYSTEM_PASSWORD_STATUS, payLoad: STATE.FETCHING});
        let data = yield call(services.system_updatePassword, action.payLoad);
        data = data.data;
        if (data.errorNo == 0) {
            yield put({type: UPDATE_SYSTEM_PASSWORD_STATUS, payLoad: STATE.SUCCESS});
        } else {
            yield put({type: UPDATE_SYSTEM_PASSWORD_STATUS, payLoad: STATE.ERROR});
        }
    });
}
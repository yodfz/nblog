import {UPDATE_SYSTEM_PASSWORD} from '../actionsType';
import {put, call, fork} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga'
import services from '../../services';

export function* watchUpdatePassword () {
    // UPDATE_SYSTEM_PASSWORD
    yield takeEvery(UPDATE_SYSTEM_PASSWORD, function* () {
        // let data = yield call(services.photo_save, action.payLoad);
    });
}
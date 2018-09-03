import {UPDATE_SYSTEM_PASSWORD, GET_DBBAK_INFO, BAK_DBBAK} from '../actionsType';

export function updatePassword($obj) {
    return {type: UPDATE_SYSTEM_PASSWORD, payLoad: $obj};
}

export function getDbInfo() {
    return {type: GET_DBBAK_INFO}
}

export function getBak_DbBak() {
    return {type: BAK_DBBAK}
}
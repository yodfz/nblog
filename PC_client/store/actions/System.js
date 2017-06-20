import {UPDATE_SYSTEM_PASSWORD} from '../actionsType';
export function updatePassword ($obj) {
    return {type: UPDATE_SYSTEM_PASSWORD, payLoad: $obj};
}
import {UPDATE_SYSTEM_PASSWORD} from '../actionsType';
const defaultState = {
    index: 0,
    updatePassword: {
        oldPassword: {},
        newPassword1: {},
        newPassword2: {},
    }
};
export default (state = defaultState, action)=> {
    let map = {};
    map[UPDATE_SYSTEM_PASSWORD] = ()=> {
        return state;
    };

    let $action = map[action.type];
    if ($action) {
        return $action();
    }
    return state;
}
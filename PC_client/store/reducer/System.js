import {
    UPDATE_SYSTEM_PASSWORD,
    UPDATE_SYSTEM_PASSWORD_STATUS,
    GET_DBBAK_INFO} from '../actionsType';
const defaultState = {
    index: 0,
    updatePasswordStatus: '',
    updatePassword: {
        oldPassword: {},
        newPassword1: {},
        newPassword2: {},
    },
    DbBak: {
        now: {},
        bak: {}
    }
};
export default (state = defaultState, action)=> {
    let map = {};
    map[UPDATE_SYSTEM_PASSWORD] = ()=> {
        return state;
    };
    map[GET_DBBAK_INFO] = () =>{
        return state
    };
    map[UPDATE_SYSTEM_PASSWORD_STATUS] = ()=> {
        return Object.assign({}, state, {updatePasswordStatus: action.payLoad})
    };

    let $action = map[action.type];
    // if ($action) {
    //     return $action();
    // }
    return $action ? $action() : state;
}
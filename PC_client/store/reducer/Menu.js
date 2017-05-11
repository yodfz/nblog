import {SELECT_MENU} from '../actionsType';
const defaultState = {
    index: 1
};
export default (state = defaultState, action)=> {
    console.log(state, action);
    switch (action.type) {
        case SELECT_MENU: {
            return Object.assign({}, state, {index: action.payLoad.index});
        }
            break;
        default:
            return state;
    }
}
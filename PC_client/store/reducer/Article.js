import {SELECT_ARTICLE} from '../actionsType';

const defaultState = {
    status: {
        isFetching: false,
    },
    select: {},
    data: [],
    detail: {}
};


export default (state = defaultState, action)=> {
    console.log(state, action);
    switch (action.type) {
        case SELECT_ARTICLE: {
            if (action.payLoad.id == -1) {
                return Object.assign({}, state, {select: {}});
            }
            return Object.assign({}, state, {select: {id: action.payLoad.index}});
        }
            break;
        default:
            return state;
    }
}
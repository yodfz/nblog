import {SELECT_ARTICLE, UPDATE_ARTICLE_STATE, APPEND_ARTICLE_LIST} from '../actionsType';

const defaultState = {
    status: '',
    select: {},
    data: [],
    detail: {}
};


export default (state = defaultState, action)=> {
    console.log('article action',action);
    switch (action.type) {
        case SELECT_ARTICLE: {
            if (action.payLoad.id == -1) {
                return Object.assign({}, state, {select: {}});
            }
            return Object.assign({}, state, {select: {id: action.payLoad.index}});
        }
            break;
        case UPDATE_ARTICLE_STATE: {
            return Object.assign({}, state, {status: action.payLoad.state});
        }
            break;
        default:
            return state;
    }
}
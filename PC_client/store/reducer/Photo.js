import {CREATE_PHOTO_DETAIL, UPDATE_PHOTO_DETAIL} from '../actionsType';

const defaultState = {
    photo: {},
    data: [],
    pageIndex: 0
};

export default (state = defaultState, action)=> {
    switch (action.type) {
        case CREATE_PHOTO_DETAIL: {
            return Object.assign({}, state, {photo: {}});
        }
            break;
        case UPDATE_PHOTO_DETAIL: {
            return Object.assign({}, state, Object.assign({}, state.photo, action.payLoad));
        }
            break;
        default: {
            return Object.assign({}, state);
        }
            break;
    }
}
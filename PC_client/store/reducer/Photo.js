import {
    CREATE_PHOTO_DETAIL, UPDATE_PHOTO_DETAIL,
    UPDATE_PHOTO_LIST_STATUS,
    UPDATE_PHOTO_DETAIL_STATUS
} from '../actionsType';

const defaultState = {
    photo: {},
    data: [],
    status: '',
    detailStatus:'',
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
        case UPDATE_PHOTO_LIST_STATUS: {
            return Object.assign({}, state, {status: action.payLoad});
        }
            break;
        case UPDATE_PHOTO_DETAIL_STATUS:{
            return Object.assign({}, state);
        }break;
        default: {
            return Object.assign({}, state);
        }
            break;
    }
}
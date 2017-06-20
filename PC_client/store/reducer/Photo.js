import {
    CREATE_PHOTO_DETAIL, UPDATE_PHOTO_DETAIL, APPEND_PHOTO_LIST,
    CLEAR_PHOTO_DETAIL, CLEAR_PHOTO_LIST, UPDATE_PHOTO_PAGEINDEX,
    UPDATE_PHOTO_LIST_STATUS,
    UPDATE_PHOTO_DETAIL_STATUS,
    APPEND_PHOTO_DETAIL_FOR_LIST,REMOVE_PHOTO_INLIST
} from '../actionsType';

const defaultState = {
    photo: {},
    data: [],
    status: '',
    detailStatus: '',
    pageIndex: 0,
    total: 0
};

export default (state = defaultState, action)=> {
    console.log('photo', action);
    switch (action.type) {
        case APPEND_PHOTO_LIST: {
            return Object.assign({}, state, {
                data: [...state.data, ...action.payLoad.data],
                total: action.payLoad.total
            });
        }
            break;
        case APPEND_PHOTO_DETAIL_FOR_LIST: {
            //判断是更新还是新增
            let $index = state.data.findIndex(p=>p.idx == action.payLoad.data.idx);
            if ($index > 0) {
                state.data[$index] = Object.assign({}, action.payLoad.data);
                return Object.assign({}, state, {data: [...state.data]})

            } else {
                return Object.assign({}, state, {data: [action.payLoad.data, ...state.data]})
            }
        }
            break;
        case CREATE_PHOTO_DETAIL: {
            return Object.assign({}, state, {photo: {}});
        }
            break;
        case UPDATE_PHOTO_DETAIL: {
            return Object.assign({}, state, {photo: Object.assign({}, state.photo, action.payLoad)});
        }
            break;
        case CLEAR_PHOTO_DETAIL: {
            return Object.assign({}, state, {photo: {}});
        }
            break;
        case CLEAR_PHOTO_LIST: {
            return Object.assign({}, state, {data: []});
        }
            break;
        case UPDATE_PHOTO_LIST_STATUS: {
            return Object.assign({}, state, {status: action.payLoad});
        }
            break;
        case UPDATE_PHOTO_DETAIL_STATUS: {
            return Object.assign({}, state, {detailStatus: action.payLoad});
        }
            break;
        case UPDATE_PHOTO_PAGEINDEX: {
            return Object.assign({}, state, {pageIndex: action.payLoad});
        }
            break;
        case REMOVE_PHOTO_INLIST:{
            let $index = state.data.findIndex(p=>p.idx == action.payLoad);
            state.data.splice($index, 1);
            return Object.assign({}, state, {data: [...state.data]});
        }break;
        default: {
            return Object.assign({}, state);
        }
            break;
    }
}
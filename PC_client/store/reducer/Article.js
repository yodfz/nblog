import {SELECT_ARTICLE, UPDATE_ARTICLE_STATE, APPEND_ARTICLE_LIST} from '../actionsType';

const defaultState = {
    // 当前状态
    status: '',
    // 选中的文章 0 为创建的
    select: {},
    // 选中文章的idx
    selectIdx: -1,
    // 文章列表数据
    data: [],
    detail: {}
};


export default (state = defaultState, action)=> {
    switch (action.type) {
        case SELECT_ARTICLE: {
            if (action.payLoad.id == -1) {
                return Object.assign({}, state, {select: {}});
            }
            let selectArticle = state.data.find(p=>p.idx == action.payLoad.id);
            return Object.assign({}, state, {select: selectArticle, selectIdx: selectArticle.idx});
        }
            break;
        case UPDATE_ARTICLE_STATE: {
            return Object.assign({}, state, {status: action.payLoad.state});
        }
            break;
        case APPEND_ARTICLE_LIST: {
            return Object.assign({}, state, {data: [...state.data, ...action.payLoad.data]});
        }
            break;
        default:
            return state;
    }
}
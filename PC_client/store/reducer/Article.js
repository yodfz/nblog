import {
    SELECT_ARTICLE,
    UPDATE_ARTICLE_STATE,
    UPDATE_ARTICLE_SAVEING,
    APPEND_ARTICLE_LIST,
    CLEAR_ARTICLE,
    ADD_ARTICLE,
    UPDATE_ARTICLE_DETAIL,
    REMOVE_ARTICLE_INLIST,
    REMOVE_ARTICLE,
    UPDATE_ARTICLE_PAGEINDEX
} from '../actionsType';

const defaultState = {
    // 当前状态
    status: '',
    // 文章详情状态
    saveing: '',
    // 选中的文章 0 为创建的
    select: {},
    // 选中文章的idx
    selectIdx: -1,
    // 是否可以加载更多文章
    isMore: true,
    // 正在加载更多
    loadMore: false,
    // 当前加载页码
    pageIndex: 0,
    // 文章列表数据
    data: [],
    detail: {}
};


export default (state = defaultState, action)=> {
    console.log(action);

    switch (action.type) {
        case CLEAR_ARTICLE: {
            return Object.assign({}, state, {data: []});
        }
            break;
        case SELECT_ARTICLE: {
            if (action.payLoad.id == -1) {
                return Object.assign({}, state, {select: {}});
            }
            let selectArticle = state.data.find(p=>p.idx == action.payLoad.id);
            return Object.assign({}, state,
                {select: selectArticle, selectIdx: selectArticle.idx, saveing: ''});
        }
            break;
        case UPDATE_ARTICLE_STATE: {
            return Object.assign({}, state, {status: action.payLoad.state});
        }
            break;
        case UPDATE_ARTICLE_SAVEING: {
            return Object.assign({}, state, {saveing: action.payLoad});
        }
            break;
        case UPDATE_ARTICLE_PAGEINDEX: {
            return Object.assign({}, state, {pageIndex: action.payLoad});
        }
            break;
        case APPEND_ARTICLE_LIST: {
            return Object.assign({}, state, {data: [...state.data, ...action.payLoad.data]});
        }
            break;
        case ADD_ARTICLE: {
            return Object.assign({}, state, {
                data: [{
                    idx: 0,
                    tag: '',
                    createdAt: new Date(),
                    content: '',
                    title: ''
                }, ...state.data]
            });
        }
            break;
        case REMOVE_ARTICLE_INLIST: {
            let $index = state.data.findIndex(p=>p.idx == action.payLoad);
            state.data.splice($index, 1);
            return Object.assign({}, state, {data: [...state.data]});
        }
            break;
        // case REMOVE_ARTICLE: {
        //     return Object.assign({}, state, {data: [], pageIndex: 0});
        // }
        //     break;
        case UPDATE_ARTICLE_DETAIL: {
            let $item = state.data.findIndex(p=>p.idx == action.payLoad.data.idx);
            console.log(UPDATE_ARTICLE_DETAIL, $item);
            if ($item >= 0) {
                state.data[$item] = Object.assign({}, state.data[$item], action.payLoad.data);
            }
            return Object.assign({}, state, {data: [...state.data]});
        }
            break;
        default:
            return state;
    }
}
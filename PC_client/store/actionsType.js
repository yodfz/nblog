/**
 * actionsType 表示系统中所有的修改数据指令名称
 * @type {string}
 */
const SELECT_MENU = 'SELECT_MENU';

const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST';
const APPEND_ARTICLE_LIST = 'APPEND_ARTICLE_LIST';
const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL';
const ADD_ARTICLE = 'ADD_ARTICLE';
const SAVE_ARTICLE = 'SAVE_ARTICLE';
const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
const UPDATE_ARTICLE_DETAIL = 'UPDATE_ARTICLE_DETAIL';
const UPDATE_ARTICLE_PAGEINDEX = 'UPDATE_ARTICLE_PAGEINDEX';
const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
const REMOVE_ARTICLE_INLIST = 'REMOVE_ARTICLE_INLIST';
const CLEAR_ARTICLE = 'CLEAR_ARTICLE';
const SELECT_ARTICLE = 'SELECT_ARTICLE';
const UPDATE_ARTICLE_STATE = 'UPDATE_ARTICLE_STATE';
const UPDATE_ARTICLE_SAVEING = 'UPDATE_ARTICLE_SAVEING';

const APPEND_PHOTO_LIST ='APPEND_PHOTO_LIST';
const UPDATE_PHOTO_DETAIL = 'UPDATE_PHOTO_DETAIL';
const UPDATE_PHOTO_LIST_STATUS = 'UPDATE_PHOTO_LIST_STATUS';
const UPDATE_PHOTO_DETAIL_STATUS = 'UPDATE_PHOTO_DETAIL_STATUS';
const CREATE_PHOTO_DETAIL = 'CREATE_PHOTO_DETAIL';
const SAVE_PHOTO_DETAIL = 'SAVE_PHOTO_DETAIL';
const GET_PHOTO_LIST = 'GET_PHOTO_LIST';

const STATE = {
    FETCHING: 'FETCHING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
};
export {
    SELECT_MENU,

    GET_ARTICLE_LIST,
    GET_ARTICLE_DETAIL,
    ADD_ARTICLE,
    CLEAR_ARTICLE,
    UPDATE_ARTICLE,
    UPDATE_ARTICLE_STATE,
    UPDATE_ARTICLE_SAVEING,
    UPDATE_ARTICLE_DETAIL,
    UPDATE_ARTICLE_PAGEINDEX,
    REMOVE_ARTICLE,
    REMOVE_ARTICLE_INLIST,
    SELECT_ARTICLE,
    SAVE_ARTICLE,
    APPEND_ARTICLE_LIST,

    APPEND_PHOTO_LIST,
    UPDATE_PHOTO_DETAIL,
    UPDATE_PHOTO_LIST_STATUS,
    UPDATE_PHOTO_DETAIL_STATUS,
    CREATE_PHOTO_DETAIL,
    GET_PHOTO_LIST,
    SAVE_PHOTO_DETAIL,

    STATE
};

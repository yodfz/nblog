import {
    CREATE_PHOTO_DETAIL, GET_ARTICLE_LIST,
    UPDATE_PHOTO_DETAIL,
    SAVE_PHOTO_DETAIL
} from '../actionsType';

/**
 * 创建相片
 * 用于重置相片对应变量
 */
const createPhotoDetail = () => {
    return {type: CREATE_PHOTO_DETAIL};
};

/**
 * 获取相册列表
 */
const getPhotoList = ($pageIndex, $key) => {
    return {
        type: GET_ARTICLE_LIST, payLoad: {
            pageIndex: $pageIndex,
            key: $key
        }
    };
};

/**
 * 更新详情框中的Img数据
 * @param $obj
 * @returns {{type, payLoad: *}}
 */
const updatePhotoDetail = ($obj) => {
    return {
        type: UPDATE_PHOTO_DETAIL, payLoad: $obj
    };
};

/**
 * 保存数据
 * @param $obj
 */
const savePhotoDetail = ($obj)=> {
    console.log($obj);
    return {
        type: SAVE_PHOTO_DETAIL,
        payLoad: $obj
    }
};

export {
    createPhotoDetail,
    getPhotoList,
    updatePhotoDetail,
    savePhotoDetail
}
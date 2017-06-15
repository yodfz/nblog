import {CREATE_PHOTO_DETAIL} from '../actionsType';

/**
 * 创建相片
 * 用于重置相片对应变量
 */
const createPhotoDetail = () => {
    return {type: CREATE_PHOTO_DETAIL};
};

export {
    createPhotoDetail
}
// import $config from '../config';
export default [
    {key: 'article_list', url: window.config.apiPre + 'article'},
    {key: 'article_save', url: window.config.apiPre + 'article/save',method:'POST'},
    {key: 'article_delete', url: window.config.apiPre + 'article/delete',method:'POST'},

    {key: 'photo_list', url: window.config.apiPre + 'photo'},
    {key: 'photo_save', url: window.config.apiPre + 'photo/save',method:'POST'},
    {key: 'photo_delete', url: window.config.apiPre + 'photo/delete',method:'POST'},

    {key: 'upload', url: window.config.apiPre + 'upload'}
];
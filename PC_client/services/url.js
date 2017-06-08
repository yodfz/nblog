// import $config from '../config';
export default [
    {key: 'article_list', url: window.config.apiPre + 'article'},
    {key: 'article_save', url: window.config.apiPre + 'article/save',method:'POST'},
    {key: 'article_delete', url: window.config.apiPre + 'article/delete',method:'POST'},
    {key: 'upload', url: window.config.apiPre + 'upload'}
];
import url from './url';
import axios from 'axios';
let fn = {};
url.map(p=> {
    fn[p.key] = function (data, opt = {}) {
        // let params = {
        //     pageIndex: $pageIndex || 1
        // };
        return axios(Object.assign({}, {
            method: opt.method || p.method || 'GET',
            url: p.url,
            // params: data,
            // data: data,
            headers: opt.headers || {}
        }, opt, ((opt.method || p.method) == 'POST' ? {data: data} : {params: data})));
    };
});

export default fn;
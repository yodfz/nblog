import url from './url';
import axios from 'axios';
let fn = {};
url.map(p=> {
    fn[p.key] = function (data, opt = {}) {
        // let params = {
        //     pageIndex: $pageIndex || 1
        // };
        return axios(Object.assign({}, {
            method: p.method || 'GET',
            url: p.url,
            params: data,
            data: data,
            headers: opt.headers || {}
        }, opt));
    };
});

export default fn;
import url from './url';
let fn = {};
url.map(p=> {
    fn[p.key] = function ($pageIndex, opt) {
        let params = {
            pageIndex: $pageIndex || 1
        };
        return axios({
            method: p.method || 'GET',
            url: p.url,
            data: params,
            headers: opt.headers || {}
        });
    };
});

export default fn;
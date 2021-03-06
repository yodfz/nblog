module.exports = {
    // api 路由前缀
    apiPre: '/api/v1/',
    apiPre2: '/api/v2/',
    port: 7800,
    // 数据库配置
    db: {
        port: 7800,
        url: __dirname + '/./db/index.sqlite',
        dialect: 'sqlite',//'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
        uid: '',
        database: '',
        pwd: '',
        // 每次开启是否重置数据库
        resetDB: false
    },
    // 分页 每页20条
    pageSize: 10,
    // session配置
    session: {
        key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
        maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
        overwrite: true, /** (boolean) can overwrite or not (default true) */
        httpOnly: true, /** (boolean) httpOnly or not (default true) */
        signed: true, /** (boolean) signed or not (default true) */
    }
};
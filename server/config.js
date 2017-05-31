
module.exports = {
    // api 路由前缀
    apiPre:'/api/v1/',
    db:{
        port : 7800,
        url:__dirname + '/./db/index.sqlite',
        dialect:'sqlite',//'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
        uid:'',
        database:'',
        pwd:'',
        // 每次开启是否重置数据库
        resetDB:false
    }
};
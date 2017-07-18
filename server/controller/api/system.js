const fs = require('fs');
const fse = require('fs-extra');
const config = require('../../config');

const db = config.db.url;
const bakDb = config.db.url.replace('.sqlite','.bak.sqlite');

module.exports = {
    /**
     * 获取数据库与备份数据库大小大小
     */
    getDbInfo () {
        let returnResult = {
            now: {},
            bak: {}
        };
        const file = fs.statSync(db);
        try {
            const fileBak = fs.statSync(bakDb);
            returnResult.bak.size = fileBak.size;
            returnResult.bak.lastDate = fileBak.atime;
        } catch (err) {
            returnResult.bak.size = 0;
            returnResult.bak.lastDate = null;
        }
        returnResult.now.size = file.size;
        returnResult.now.lastDate = file.atime;
        return returnResult;
    },
    /**
     * 备份数据库
     */
    async bakDb () {
        return await new Promise((res,rej)=>{
            fse.copy(db,bakDb,function(err){
                if(err) rej('COPY ERROR');
                res('SUCCESS');
            });
        });
    }
};
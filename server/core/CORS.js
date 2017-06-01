module.exports = (ctx)=> {
    // Access-Control-Allow-Credentials:true
    // Access-Control-Allow-Headers:x-requested-with,Content-Type,Accept,accessToken,Authorization
    // Access-Control-Allow-Methods:POST, GET, OPTIONS
    // Access-Control-Allow-Origin:*
    // Access-Control-Max-Age:60
    ctx.set('Access-Control-Allow-Credentials','true');
    ctx.set('Access-Control-Allow-Headers','x-requested-with,Content-Type,Accept,accessToken,Authorization');
    return ctx;
};
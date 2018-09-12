const server = require('./server/index')
const next = require('next')
const router = require('koa-router')();
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const config = require('./config')

app
    .prepare()
    .then(() => {

        // const server = express()
        // // next.js 自定义路由
        router.get('/detail/:id/:title\.html',async (ctx) => {
            const actualPage = '/detail'
            const queryParams = {
                id: ctx.params.id,
                title:ctx.params.title
            }
            console.log(actualPage,queryParams)
            ctx.body = await app.renderToHTML(ctx.req, ctx.res, actualPage, queryParams)
        })

        router.get('*',async (ctx,next) => {
            await handle(ctx.req, ctx.res)
            ctx.respond = false
        })
        server.use(router.routes())
        server.use(async (ctx, next) => {
            // Koa doesn't seems to set the default statusCode.
            // So, this middleware does that
            ctx.res.statusCode = 200
            await next()
          })
        // server.listen(3000, (err) => {
        //     if (err) 
        //         throw err
        //     console.log('> Ready on http://localhost:3000')
        // })
        server.listen(config.port,()=>{
            console.log('server run in port:' + config.port);
        });
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
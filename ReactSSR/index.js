const app = require('./server/index')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        // const server = express()
        // // next.js 自定义路由
        // server.get('/detail/:id/:title\.html', (req, res) => {
        //     const actualPage = '/detail'
        //     const queryParams = {
        //         id: req.params.id,
        //         title:req.params.title
        //     }
        //     app.render(req, res, actualPage, queryParams)
        // })

        // server.get('*', (req, res) => {
        //     return handle(req, res)
        // })

        // server.listen(3000, (err) => {
        //     if (err) 
        //         throw err
        //     console.log('> Ready on http://localhost:3000')
        // })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
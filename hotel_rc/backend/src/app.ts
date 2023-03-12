import express, { Express, Request, Response, Router } from 'express'
;(async () => {
    const app: Express = express()
    const middleware: any = require('./api/middlewares/index.js')
    const router: any = require('./api/routes/index.js')
    const port = '3000'

    middleware.mw(app)
    router.routerLoader(app)
    app.use(express.static(`${__dirname}/api/uploads`))

    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`)
    })
})()

import express, { Express, Request, Response, Router } from 'express'
;(async () => {
    const app: Express = express()
    const middleware = require('./api/middlewares/index.js')
    const router: Router = require('./api/routes/index.js')
    const port = '3000'

    middleware.mw(app)
    app.use('/', router)

    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`)
    })
})()

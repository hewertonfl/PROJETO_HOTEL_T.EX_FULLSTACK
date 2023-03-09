import express, { Express, Request, Response, Router } from 'express'
;(async () => {
    const app: Express = express()
    // const userModel = require('./api/models/UserModel.js')
    const consign = require('consign')
    const router = require('./api/routes/index.js')
    const port = '3000'

    app.use(express.json())
    app.use('/', router)
    //consign().then('./api/middlewares/index.js').into(app)

    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`)
    })
})()

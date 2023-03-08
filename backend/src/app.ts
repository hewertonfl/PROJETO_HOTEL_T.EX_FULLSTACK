import { Response, Request } from 'express'
;(async () => {
    const express = require('express')
    const app = express()
    // const userModel = require('./api/models/UserModel.js')
    //const consign = require('consign')
    const router = require('./api/routes/index.js')
    const port = '3000'

    app.use(express.json())
    app.use('/', router)

    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`)
    })
})()

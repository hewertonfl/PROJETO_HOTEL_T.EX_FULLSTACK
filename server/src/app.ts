import { Response, Request } from 'express'
const app = async () => {
    const express = require('express')
    const app = express()
    const db = require('./api/config/database.js')
    const dbShowdatabases = await db.showtables()
    const port = 3000

    app.get('/', (req: Request, res: Response) => {
        //res.send('Hello World!')
        res.writeHead(200, { 'Content-Type': 'text/json;chatset=utf-8' })
        res.end(dbShowdatabases)
    })

    // require('dotenv').config()
    // console.log(process.env)
    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`)
    })
}

app()

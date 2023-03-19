const userRouter = require('./public/UserRouter.js')
const adminRoomRouter = require('./admin/RoomRouter.js')
const publicRoomRouter = require('./public/RoomRouter.js')

async function routerLoader(app: any): Promise<void> {
    app.use('/', userRouter)
    app.use('/', publicRoomRouter)
    app.use('/admin', adminRoomRouter)
}

module.exports = { routerLoader }

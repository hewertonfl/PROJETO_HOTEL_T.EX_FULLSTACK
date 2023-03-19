const userRouter = require('./public/UserRouter.js')
const adminRoomRouter = require('./admin/RoomRouter.js')
const publicRoomRouter = require('./public/RoomRouter.js')
const adminUsersRouter = require('./admin/UserRouter.js')

async function routerLoader(app: any): Promise<void> {
    app.use('/', userRouter)
    app.use('/', publicRoomRouter)
    app.use('/admin', adminRoomRouter)
    app.use('/admin', adminUsersRouter)
}

module.exports = { routerLoader }

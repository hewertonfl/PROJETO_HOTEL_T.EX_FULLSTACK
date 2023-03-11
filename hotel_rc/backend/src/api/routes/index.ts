const userRouter = require('./public/UserRouter.js')
const adminRouter = require('./admin/RoomRouter.js')

async function routerLoader(app: any): Promise<void> {
    app.use('/', userRouter)
    app.use('/admin', adminRouter)
}

module.exports = { routerLoader }

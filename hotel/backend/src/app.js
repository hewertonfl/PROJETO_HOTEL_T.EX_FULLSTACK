const express = require('express')
const cors = require('cors')
const session = require('express-session')

const dia = 1000 * 60 * 60 * 24 //24 horas calculadas em milisegundos

// Rotas
const router = require('./router')

const app = express()

// Middleware
app.use(cors({ origin: ["https://localhost:8080"], credentials: true }))
app.use(express.json())

app.use(
    session({
        secret: '34poipi5454p@1212223fdfkljlçerreiot',
        saveUninitialized: true,
        cookie: { maxAge: dia },
        resave: false,
    })
)

app.use(express.urlencoded({ extended: true }))
app.use(express.static(`../../frontend/public/index.html`))

// Rotas
const {adicionaisRouter} = require('./router')
const {acomodacoesRouter} = require('./router')
const {usuariosRouter} = require('./router')
app.use('/api/adicionais', adicionaisRouter)
app.use('/api/acomodacoes', acomodacoesRouter)
app.use('/api/usuarios', usuariosRouter)

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err)
        } else {
            res.clearCookie('sessionId')
            res.send({ message: 'Logout realizado com sucesso.' })
        }
    })
})

module.exports = app
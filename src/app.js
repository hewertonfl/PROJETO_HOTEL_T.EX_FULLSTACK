const e = require('express')
const express = require('express')

// Rotas
const router = require('./router')

const app = express()

// Middleware
app.use(express.json())

// Rotas
const {adicionaisRouter} = require('./router')
app.use('/adicionais', adicionaisRouter)

module.exports = app
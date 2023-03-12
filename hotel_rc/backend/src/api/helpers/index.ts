import express, { Express, Request, Response, Router } from 'express'
const bcrypt = require('bcrypt')
const multer = require('multer')
const path = require('path')
const saltRounds = 10

async function passCrypt(password: string) {
    const salt = bcrypt.genSaltSync(saltRounds)
    const passwordHash: string = await bcrypt.hashSync(password, salt)
    return passwordHash
}

async function passDecrypt(pass: string, encriptedPass: string) {
    const passwordCompare: boolean = await bcrypt.compareSync(
        pass,
        encriptedPass
    )
    return passwordCompare
}

function uploadImage(nome: string) {
    const mt = multer.diskStorage({
        destination: (req: any, file: any, cb: any) => {
            cb(null, './api/uploads')
        },
        filename: (req: any, file: any, cb: any) => {
            cb(null, Date.now() + path.extname(file.originalname))
        },
    })

    const upload = multer({ storage: mt }).single(`${nome}`)
    return upload
}

module.exports = { passCrypt, passDecrypt, uploadImage }

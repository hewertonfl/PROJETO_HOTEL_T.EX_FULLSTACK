const bcrypt = require('bcrypt')
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

module.exports = { passCrypt, passDecrypt }

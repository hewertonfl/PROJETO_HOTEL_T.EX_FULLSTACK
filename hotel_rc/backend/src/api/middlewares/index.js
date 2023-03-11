"use strict";
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const date = Date.now(); // data de agora, incluindo horario
const dia = 1000 * 60 * 60 * 24; //24 horas calculadas em milisegundos
function mw(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
}
module.exports = { mw };

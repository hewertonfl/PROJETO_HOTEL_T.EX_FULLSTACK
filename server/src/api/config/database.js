"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config({ path: `${__dirname}/../../.env` });
// console.log(process.env.DB_PASSWORD)
// Configura a conexão
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const mysql = require('mysql2/promise');
        const conn = yield mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('MySQL conectado');
        // global.connection = conn
        return conn;
    });
}
function showtables() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield connect();
        const [rows] = yield conn.query('SHOW TABLES');
        console.log(rows);
        return JSON.stringify(rows);
    });
}
console.log('entrou');
//showtables()
module.exports = { connect, showtables };

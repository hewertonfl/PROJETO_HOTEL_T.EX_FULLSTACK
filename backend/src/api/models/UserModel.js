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
const db = require('../config/database');
function readUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        const [rows] = yield conn.query('SELECT * FROM hotel_recanto.usuario');
        console.log(rows);
        return JSON.stringify(rows);
    });
}
function writeUsers(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        const values = [
            data['nome'],
            data['sobrenome'],
            data['email'],
            data['nivel'],
            data['status'],
            data['senha'],
        ];
        const [rows] = yield conn.query('INSERT INTO hotel_recanto.usuario (nome,sobrenome,email,nivel,status,senha) values(?,?,?,?,?,?)', values);
        console.log('Dados inseridos com sucesso!');
    });
}
// writeUsers({
//     nome: 'Mario',
//     sobrenome: 'Bros',
//     email: 'mairo@bros.com.br',
//     nivel: '0',
//     status: 'ativo',
//     senha: '123',
// })
module.exports = { readUsers, writeUsers };

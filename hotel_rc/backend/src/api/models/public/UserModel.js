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
let db = require('../../../config/database.js');
const encrypt = require('../../helpers/index.js');
// Salva um usuário no banco
function writeUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield db.connect();
            data.senha = yield encrypt.passCrypt(data.senha);
            const values = [
                data['nome'],
                data['sobrenome'],
                data['email'],
                data['nivel'],
                data['status'],
                data['senha'],
            ];
            const [rows] = yield conn.query('INSERT INTO hotel_recanto.usuario (nome,sobrenome,email,nivel,status,senha) values(?,?,?,?,?,?)', values);
            conn.end();
            console.log('Dados inseridos com sucesso!');
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
module.exports = { writeUser };

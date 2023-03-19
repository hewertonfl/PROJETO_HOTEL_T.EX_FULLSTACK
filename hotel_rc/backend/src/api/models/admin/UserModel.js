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
Object.defineProperty(exports, "__esModule", { value: true });
let db = require('../../../config/database.js');
const encrypt = require('../../helpers/index.js');
// Leitura de usuários no database
function readUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        const [rows] = yield conn.query('SELECT * FROM hotel_recanto.usuario');
        conn.end();
        return rows;
    });
}
// Procura determinado user no banco
function findUsername(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        try {
            const [rows] = yield conn.query('SELECT * FROM hotel_recanto.usuario WHERE id_usuario = ?', id);
            conn.end();
            return rows;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
// Inativa um user no banco
function deactiveUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        let dados;
        const [user] = yield findUsername(id);
        user.status == 'Inativo'
            ? (dados = ['Ativo', id])
            : (dados = ['Inativo', id]);
        try {
            yield conn.query('UPDATE hotel_recanto.usuario SET status = ? WHERE id_usuario = ?', dados);
            conn.end();
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
// Update usuário
function userUpdate(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        data['senha'] = yield encrypt.passCrypt(data['senha']);
        try {
            const values = [
                data.nome,
                data.sobrenome,
                data.email,
                data.nivel,
                data.senha,
                data.status,
            ];
            yield conn.query(`UPDATE hotel_recanto.usuario SET nome=?, sobrenome=?, email=?, nivel=?, senha=?, status=? WHERE id_usuario = ${id}`, values);
            conn.end();
            console.log('Usuário atualizada com sucesso!');
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
module.exports = { findUsername, deactiveUser, readUsers, userUpdate };

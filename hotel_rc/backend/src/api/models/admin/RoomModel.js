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
// Salva os dados do quarto
function writeRoom(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        const values = [
            data['numero'],
            data['tipo'],
            data['descricao'],
            data['preco'],
            data['imagem'],
            data['status'],
        ];
        try {
            const [rows] = yield conn.query('INSERT INTO hotel_recanto.acomodacao (numero,tipo,descricao,preco,imagem,status) values(?,?,?,?,?,?)', values);
            console.log('Dados inseridos com sucesso!');
        }
        catch (error) {
            console.log(error);
            return null;
        }
        conn.end();
    });
}
// Retorna dados do quarto por id
function roomSelectById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield db.connect();
            const [rows] = yield conn.query(`SELECT * FROM hotel_recanto.acomodacao WHERE id_acomodacao = ${id}`);
            //console.log(rows)
            console.log('Leitura de acomodação por id feita com sucesso!');
            conn.end();
            return rows;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
// Atualiza Quartos
function roomUpdate(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield db.connect();
            const values = [
                data.numero,
                data.tipo,
                data.descricao,
                data.preco,
                data.imagem,
                data.status,
            ];
            yield conn.query(`UPDATE hotel_recanto.acomodacao SET numero=?, tipo=?, descricao=?, preco=?, imagem=?, status=? WHERE id_acomodacao = ${id}`, values);
            conn.end();
            console.log('Acomodação atualizada com sucesso!');
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
// Remove quartos
function roomRemove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield db.connect();
        try {
            yield conn.query(`DELETE FROM hotel_recanto.acomodacao WHERE id = ${id}`);
            conn.end();
            console.log('Acomodação deletada com sucesso!');
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
module.exports = { writeRoom, roomSelectById, roomUpdate, roomRemove };

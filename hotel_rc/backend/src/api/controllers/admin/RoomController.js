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
const roomModel = require('../../models/admin/RoomModel.js');
// Controle de acesso de salvamento de dados dos quartos
function writeRoomControl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const save = yield roomModel.writeRoom(data);
            res.status(201).json(data);
        }
        catch (error) {
            res.send(400).json(error);
        }
    });
}
// Controle de seleção dos quartos
function roomSelectByIdControl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        console.log(id);
        try {
            const acomodacao = yield roomModel.roomSelectById(id);
            res.status(200).json(acomodacao);
        }
        catch (error) {
            res.status(400).send({ message: 'Quarto não encontrado' });
        }
    });
}
// Controle de update dos quartos
function roomUpdateControl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const dados = req.body;
        try {
            yield roomModel.roomUpdate(id, dados);
            res.status(200).json({ message: `Quarto atualizado com sucesso!` });
        }
        catch (error) {
            res.status(400).send({ message: 'Operação invalida' });
        }
    });
}
// Controle de acesso de upload de imagens das acomodações
function uploadImageControl(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const imagem = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        if (!imagem) {
            res.status(404).send({ message: 'Imagem não encontrada' });
        }
        else {
            res.status(200).send({
                message: 'Imagem enviada com sucesso',
                image: imagem,
            });
        }
    });
}
module.exports = {
    writeRoomControl,
    uploadImageControl,
    roomSelectByIdControl,
    roomUpdateControl,
};

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
const userModel = require('../models/UserModel.js');
const validations = require('../validations/index.js');
function writeUsersControl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const users = yield userModel.writeUsers(user);
            res.status(201).json(user);
        }
        catch (error) {
            res.send(400).json(error);
        }
    });
}
function loginControl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body.user;
        const pass = req.body.pass;
        const valid = yield validations.auth(user, pass);
        if (valid === 1) {
            res.status(200).json({
                message: 'Logado com sucesso',
            });
        }
        else if (valid === 2) {
            res.status(403).send({
                message: 'Usuário ou senha invalidos',
            });
        }
        else {
            res.status(404).send({
                message: 'Usuário não existe na base de dados',
            });
        }
    });
}
module.exports = { writeUsersControl, loginControl };

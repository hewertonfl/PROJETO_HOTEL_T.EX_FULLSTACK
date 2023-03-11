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
const readUsers = require('../models/UserModel.js');
const decrypt = require('../helpers/index.js');
function auth(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const row = yield readUsers.findUsername(username);
        const [objRow] = JSON.parse(row);
        let status = 0;
        if (!objRow) {
            console.log('Usuário não existe na base de dados');
            return status;
        }
        if (username == objRow.email &&
            (yield decrypt.passDecrypt(password, objRow.senha))) {
            console.log('Logado com sucesso!');
            status = 1;
            return status;
        }
        console.log('Usuário ou senha invalidos');
        status = 2;
        return status;
    });
}
module.exports = { auth };

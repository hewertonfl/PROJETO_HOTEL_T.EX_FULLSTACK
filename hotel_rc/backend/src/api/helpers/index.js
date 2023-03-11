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
const bcrypt = require('bcrypt');
const saltRounds = 10;
function passCrypt(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = bcrypt.genSaltSync(saltRounds);
        const passwordHash = yield bcrypt.hashSync(password, salt);
        return passwordHash;
    });
}
function passDecrypt(pass, encriptedPass) {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordCompare = yield bcrypt.compareSync(pass, encriptedPass);
        return passwordCompare;
    });
}
module.exports = { passCrypt, passDecrypt };

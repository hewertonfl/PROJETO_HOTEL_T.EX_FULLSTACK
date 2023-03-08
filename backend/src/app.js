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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const express = require('express');
    const app = express();
    // const userModel = require('./api/models/UserModel.js')
    //const consign = require('consign')
    const router = require('./api/routes/index.js');
    const port = '3000';
    app.use(express.json());
    app.use('/', router);
    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`);
    });
}))();

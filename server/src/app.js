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
const app = () => __awaiter(void 0, void 0, void 0, function* () {
    const express = require('express');
    const app = express();
    const db = require('./api/config/database.js');
    const dbShowdatabases = yield db.showtables();
    const port = 3000;
    app.get('/', (req, res) => {
        //res.send('Hello World!')
        res.writeHead(200, { 'Content-Type': 'text/json;chatset=utf-8' });
        res.end(dbShowdatabases);
    });
    // require('dotenv').config()
    // console.log(process.env)
    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`);
    });
});
app();

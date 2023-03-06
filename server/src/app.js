"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// require('dotenv').config()
// console.log(process.env)
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

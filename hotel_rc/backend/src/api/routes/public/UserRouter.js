"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require('../../controllers/public/UserController.js');
// router.get('/user', (req: Request, res: Response) => {
//     res.writeHead(200, { 'Content-type': 'application/json;charset=utf8' })
// })
router.post('/insert', userController.writeUserControl);
router.post('/login', userController.loginControl);
module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const roomController = require('../../controllers/admin/RoomController.js');
// router.get('/user', (req: Request, res: Response) => {
//     res.writeHead(200, { 'Content-type': 'application/json;charset=utf8' })
// })
router.post('/room/insert', roomController.writeRoomControl);
//router.post('/login', roomController.loginControl)
module.exports = router;

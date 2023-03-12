"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const roomController = require('../../controllers/admin/RoomController.js');
const upld = require('../../helpers/index.js');
router.post('/room/insert', roomController.writeRoomControl);
router.post('/room/put/', upld.uploadImage('UploadImage'), roomController.uploadImageControl);
module.exports = router;

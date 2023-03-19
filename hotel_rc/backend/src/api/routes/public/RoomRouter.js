"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const roomController = require('../../controllers/public/RoomController.js');
router.get('/rooms', roomController.roomsListControl);
module.exports = router;

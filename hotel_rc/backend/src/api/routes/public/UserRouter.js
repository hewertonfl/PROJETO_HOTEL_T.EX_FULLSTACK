"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require('../../controllers/public/UserController.js');
router.post('/insert', userController.writeUserControl);
router.post('/login', userController.loginControl);
module.exports = router;

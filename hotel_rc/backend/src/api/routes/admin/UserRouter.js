"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require('../../controllers/admin/UserController.js');
router.patch('/inativeuser/:id', userController.deactiveUserControl);
router.patch('/userupdate/:id', userController.userUpdateControl);
router.get('/userslist', userController.readUsersControl);
module.exports = router;

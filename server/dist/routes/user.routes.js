"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.default)();
const userController = new user_controller_1.UserController();
router.get("/all", userController.all);
router.post("/register", userController.register);
router.post("/login", userController.login);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controller/post.controller");
const auth_guard_1 = require("../guard/auth.guard");
const multer_config_1 = require("../config/multer.config");
const router = (0, express_1.default)();
const postController = new post_controller_1.PostController();
router.use(auth_guard_1.checkAuth);
router.get("/all", postController.all);
router.delete('/:id', postController.delete);
router.use(multer_config_1.upload.single('image'));
router.post('/', postController.insert);
router.put('/:id', postController.update);
exports.default = router;

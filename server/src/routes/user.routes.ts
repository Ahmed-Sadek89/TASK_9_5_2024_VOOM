import express from 'express';
import { UserController } from '../controller/user.controller';

const router = express();

const userController = new UserController();

router.get("/all", userController.all)
router.post("/register", userController.register)
router.post("/login", userController.login)

export default router
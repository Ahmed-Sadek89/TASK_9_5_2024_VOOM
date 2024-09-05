"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const jwt_service_1 = require("../service/jwt.service");
const user_service_1 = require("../service/user.service");
class UserController {
    all(req, res) {
        return res.status(200).json({
            status: 200,
            users: user_service_1.UserService.all()
        });
    }
    register(req, res) {
        const { username, email, password } = req.body;
        if (!user_service_1.UserService.validateRegistrationInput(username, email, password)) {
            return res.status(400).json({
                status: 400,
                message: "Bad request, all fields are required"
            });
        }
        if (user_service_1.UserService.isUserExists(email)) {
            return res.status(409).json({
                status: 409,
                message: "User already exists!"
            });
        }
        const newUser = user_service_1.UserService.createUser(username, email, password);
        return res.status(201).json({
            status: 201,
            message: "Registration successful!",
            user: newUser
        });
    }
    login(req, res) {
        const { email, password } = req.body;
        if (!user_service_1.UserService.validateLoginInput(email, password)) {
            return res.status(400).json({
                status: 400,
                message: "Bad request, email and password are required",
            });
        }
        const user = user_service_1.UserService.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "Email does not exist!",
            });
        }
        if (!user_service_1.UserService.verifyPassword(user.password, password)) {
            return res.status(401).json({
                status: 401,
                message: "Incorrect password!",
            });
        }
        const token = jwt_service_1.JWT.generateJWT({ id: user.id });
        return res.status(200).json({
            status: 200,
            message: "Login successful!",
            token,
        });
    }
}
exports.UserController = UserController;

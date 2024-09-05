import { Request, Response } from "express";
import { User } from "../model/user/schema";
import { JWT } from "../service/jwt.service";
import { UserService } from "../service/user.service";

export class UserController {


    all(req: Request, res: Response) {
        return res.status(200).json({
            status: 200,
            users: UserService.all()
        });
    }

    register(req: Request, res: Response) {
        const { username, email, password } = req.body as User;

        if (!UserService.validateRegistrationInput(username, email, password)) {
            return res.status(400).json({
                status: 400,
                message: "Bad request, all fields are required"
            });
        }

        if (UserService.isUserExists(email)) {
            return res.status(409).json({
                status: 409,
                message: "User already exists!"
            });
        }

        const newUser = UserService.createUser(username, email, password);

        return res.status(201).json({
            status: 201,
            message: "Registration successful!",
            user: newUser
        });
    }

    login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!UserService.validateLoginInput(email, password)) {
            return res.status(400).json({
                status: 400,
                message: "Bad request, email and password are required",
            });
        }

        const user = UserService.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "Email does not exist!",
            });
        }

        if (!UserService.verifyPassword(user.password, password)) {
            return res.status(401).json({
                status: 401,
                message: "Incorrect password!",
            });
        }

        const token = JWT.generateJWT({ id: user.id });
        return res.status(200).json({
            status: 200,
            message: "Login successful!",
            token,
        });
    }
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class JWT {
    constructor() {
        this.secretKey = process.env.JWT_SECRET_KEY || '';
        if (!this.secretKey) {
            throw new Error('JWT_SECRET_KEY is not defined in environment variables');
        }
    }
    static generateJWT(data) {
        const secretKey = process.env.JWT_SECRET_KEY || '';
        const token = jsonwebtoken_1.default.sign(data, secretKey, { expiresIn: "1d" });
        return `Barear ${token}`;
    }
}
exports.JWT = JWT;

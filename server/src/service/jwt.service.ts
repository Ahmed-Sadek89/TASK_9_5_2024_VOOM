import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export class JWT {
    private secretKey: string;
    
    constructor() {
        this.secretKey = process.env.JWT_SECRET_KEY || '';
        if (!this.secretKey) {
            throw new Error('JWT_SECRET_KEY is not defined in environment variables');
        }
    }
    static generateJWT(data: { id: number }) {
        const secretKey = process.env.JWT_SECRET_KEY || ''
        const token = jwt.sign(data, secretKey, { expiresIn: "1d" });
        return `Barear ${token}`
    }
}
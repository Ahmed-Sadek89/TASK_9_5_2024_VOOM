import { User } from "../model/user/schema";
import { users } from "../model/user/store";

export class UserService {
    static all() {
        return users
    }
    
    static validateRegistrationInput(username: string, email: string, password: string): boolean {
        return Boolean(username && email && password);
    }

    static validateLoginInput(email: string, password: string): boolean {
        return Boolean(email && password);
    }

    static isUserExists(email: string): boolean {
        return users.some(user => user.email === email);
    }

    static createUser(username: string, email: string, password: string): User {
        const newUser: User = {
            id: users.length + 1,
            username,
            email,
            password
        };
        users.push(newUser);
        return newUser;
    }
    static findUserByEmail(email: string): User | undefined {
        return users.find(user => user.email === email);
    }

    static verifyPassword(storedPassword: string, providedPassword: string): boolean {
        return storedPassword === providedPassword;
    }
}
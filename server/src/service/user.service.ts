import { User } from "../model/user/schema";
import { users } from "../model/user/store";

export class UserService {
    static all() {
        const filteredusers = users.map((key) => {
            return {
                id: key.id,
                username: key.username,
                email: key.email,
            }
        })
        return filteredusers
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

    static createUser(username: string, email: string, password: string): Omit<User, "password"> {
        const id = users.length + 1;
        const newUser: User = {
            id,
            username,
            email,
            password
        };
        users.push(newUser);
        return {
            id,
            username,
            email,
        };
    }
    static findUserByEmail(email: string): User | undefined {
        return users.find(user => user.email === email);
    }

    static verifyPassword(storedPassword: string, providedPassword: string): boolean {
        return storedPassword === providedPassword;
    }
}
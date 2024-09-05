"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const store_1 = require("../model/user/store");
class UserService {
    static all() {
        return store_1.users;
    }
    static validateRegistrationInput(username, email, password) {
        return Boolean(username && email && password);
    }
    static validateLoginInput(email, password) {
        return Boolean(email && password);
    }
    static isUserExists(email) {
        return store_1.users.some(user => user.email === email);
    }
    static createUser(username, email, password) {
        const newUser = {
            id: store_1.users.length + 1,
            username,
            email,
            password
        };
        store_1.users.push(newUser);
        return newUser;
    }
    static findUserByEmail(email) {
        return store_1.users.find(user => user.email === email);
    }
    static verifyPassword(storedPassword, providedPassword) {
        return storedPassword === providedPassword;
    }
}
exports.UserService = UserService;

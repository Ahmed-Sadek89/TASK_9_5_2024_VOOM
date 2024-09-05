"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// userService.test.ts
const store_1 = require("../model/user/store");
const user_service_1 = require("../service/user.service");
describe('UserService', () => {
    beforeEach(() => {
        // Reset the users array before each test
        store_1.users.length = 0;
        store_1.users.push({ id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' }, { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' });
    });
    it('should return all users', () => {
        expect(user_service_1.UserService.all()).toEqual(store_1.users);
    });
    it("shoud return true if all fields in register are exists", () => {
        expect(user_service_1.UserService.validateRegistrationInput("ahmed", "a.sadek@yahoo.com", "12345")).toBe(true);
    });
    it("shoud return true if all fields in login are exists", () => {
        expect(user_service_1.UserService.validateLoginInput("a.sadek@yahoo.com", "12345")).toBe(true);
    });
    it("shoud be true if user is exist by his/her email", () => {
        expect(user_service_1.UserService.isUserExists("user2@example.com")).toBe(true);
    });
    it("should be the new user is exist when i create a new one", () => {
        let newUser = user_service_1.UserService.createUser("ahmed sadek", "a.sadek@yahoo.com", "123445");
        const getTheNewUser = store_1.users.find(index => index.id === newUser.id);
        expect(getTheNewUser).toBe(newUser);
    });
    it("should success when login", () => {
        const userByEmail = user_service_1.UserService.findUserByEmail("user2@example.com");
        expect(userByEmail).not.toBeUndefined();
        expect(userByEmail === null || userByEmail === void 0 ? void 0 : userByEmail.password).toBe("password2");
    });
});

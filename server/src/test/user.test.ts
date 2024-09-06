// userService.test.ts
import { users } from '../model/user/store';
import { UserService } from '../service/user.service';

describe('UserService', () => {
    beforeEach(() => {
        // Reset the users array before each test
        users.length = 0;
        users.push(
            { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
            { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' }
        );
    });

    it('should return all users', () => {
        expect(UserService.all()).not.toHaveProperty("password");
    });

    it("shoud return true if all fields in register are exists", () => {
        expect(UserService.validateRegistrationInput("ahmed", "a.sadek@yahoo.com", "12345")).toBe(true)
    })

    it("shoud return true if all fields in login are exists", () => {
        expect(UserService.validateLoginInput("a.sadek@yahoo.com", "12345")).toBe(true)
    })

    it("shoud be true if user is exist by his/her email", () => {
        expect(UserService.isUserExists("user2@example.com")).toBe(true)
    })

    it("should be the new user is exist when i create a new one", () => {
        let newUser = UserService.createUser(
            "ahmed sadek",
            "a.sadek@yahoo.com",
            "123445"
        )
        const getTheNewUser = users.find(index => index.id === newUser.id)
        
        expect(getTheNewUser).toHaveProperty("username")
    })

    it("should success when login", () => {
        const userByEmail = UserService.findUserByEmail("user2@example.com")
        expect(userByEmail).not.toBeUndefined()
        expect(userByEmail?.password).toBe("password2")
    })
});

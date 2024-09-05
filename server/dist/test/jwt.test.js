"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_service_1 = require("../service/jwt.service");
describe("jsonwebtoken", () => {
    let jwt;
    beforeAll(() => {
        process.env.JWT_SECRET_KEY = 'testsecret';
        jwt = new jwt_service_1.JWT();
    });
    it("shoud return token when payload", () => {
        const jwt = jwt_service_1.JWT.generateJWT({ id: 1 });
        const token = jwt.split(" ")[1];
        expect(token).not.toBe("");
    });
});

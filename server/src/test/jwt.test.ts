import { JWT } from "../service/jwt.service"

describe("jsonwebtoken", () => {
    let jwt: JWT;

    beforeAll(() => {
        process.env.JWT_SECRET_KEY = 'testsecret';
        jwt = new JWT();
    });

    it("shoud return token when payload", () => {
        const jwt = JWT.generateJWT({ id: 1 });
        const token = jwt.split(" ")[1];
        expect(token).not.toBe("")
    })
})
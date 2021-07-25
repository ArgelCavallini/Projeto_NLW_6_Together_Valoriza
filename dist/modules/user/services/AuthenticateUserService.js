"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserService = void 0;
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const UsersRepositories_1 = require("../../user/repositories/UsersRepositories");
class AuthenticateUserService {
    async execute({ email, password }) {
        const usersRepositories = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
        const user = await usersRepositories.findOne({
            email
        });
        if (!user) {
            throw new Error("Email/Password incorrect");
        }
        const passwordMatch = await bcryptjs_1.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }
        const token = jsonwebtoken_1.sign({
            email: user.email
        }, "4edcab9456f57433e3c8c3da35249629", {
            subject: user.id,
            expiresIn: "1d",
        });
        return token;
    }
}
exports.AuthenticateUserService = AuthenticateUserService;
//# sourceMappingURL=AuthenticateUserService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../repositories/UsersRepositories");
const bcryptjs_1 = require("bcryptjs");
class CreateUserService {
    async execute({ name, email, admin = false, password }) {
        const usersRepository = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
        if (!email) {
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await usersRepository.findOne({
            email
        });
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        if (!password) {
            throw new Error("Password incorrect");
        }
        const passwordHash = await bcryptjs_1.hash(password, 8);
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        });
        await usersRepository.save(user);
        return user;
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=CreateUserService.js.map
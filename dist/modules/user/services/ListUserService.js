"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../../user/repositories/UsersRepositories");
const class_transformer_1 = require("class-transformer");
class ListUserService {
    async execute() {
        const usersRepositories = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
        const users = await usersRepositories.find();
        return class_transformer_1.classToPlain(users);
    }
}
exports.ListUserService = ListUserService;
//# sourceMappingURL=ListUserService.js.map
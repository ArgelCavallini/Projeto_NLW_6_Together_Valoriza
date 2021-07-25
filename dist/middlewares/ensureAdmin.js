"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAdmin = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../modules/user/repositories/UsersRepositories");
async function ensureAdmin(request, response, next) {
    const { user_id } = request;
    const usersRepositories = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
    const { admin } = await usersRepositories.findOne(user_id);
    if (admin) {
        return next();
    }
    return response.status(401).json({
        error: "Unauthorized",
    });
}
exports.ensureAdmin = ensureAdmin;
//# sourceMappingURL=ensureAdmin.js.map
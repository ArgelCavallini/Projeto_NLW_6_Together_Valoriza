"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const AuthenticateUserService_1 = require("../../../services/AuthenticateUserService");
class AuthenticateUserController {
    async handle(request, response) {
        const { email, password } = request.body;
        const authenticateUserService = new AuthenticateUserService_1.AuthenticateUserService();
        const token = await authenticateUserService.execute({
            email,
            password,
        });
        return response.json(token);
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
//# sourceMappingURL=AuthenticateUserController.js.map
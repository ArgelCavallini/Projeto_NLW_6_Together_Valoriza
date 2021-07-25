"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
const ListUserService_1 = require("../../../services/ListUserService");
class ListUserController {
    async handle(request, response) {
        const listUserService = new ListUserService_1.ListUserService();
        const users = await listUserService.execute();
        return response.json(users);
    }
}
exports.ListUserController = ListUserController;
//# sourceMappingURL=ListUserController.js.map
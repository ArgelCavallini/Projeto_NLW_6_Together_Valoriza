"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserSendComplimentsController = void 0;
const ListUserSendComplimentsService_1 = require("../../../services/ListUserSendComplimentsService");
class ListUserSendComplimentsController {
    async handle(request, response) {
        const { user_id } = request;
        const listUserSendComplimentsService = new ListUserSendComplimentsService_1.ListUserSendComplimentsService();
        const compliments = await listUserSendComplimentsService.execute(user_id);
        return response.json(compliments);
    }
}
exports.ListUserSendComplimentsController = ListUserSendComplimentsController;
//# sourceMappingURL=ListUserSendComplimentsController.js.map
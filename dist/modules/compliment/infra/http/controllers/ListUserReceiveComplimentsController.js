"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserReceiveComplimentsController = void 0;
const ListUserReceiveComplimentsService_1 = require("../../../services/ListUserReceiveComplimentsService");
class ListUserReceiveComplimentsController {
    async handle(request, response) {
        const { user_id } = request;
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService_1.ListUserReceiveComplimentsService();
        const compliments = await listUserReceiveComplimentsService.execute(user_id);
        return response.json(compliments);
    }
}
exports.ListUserReceiveComplimentsController = ListUserReceiveComplimentsController;
//# sourceMappingURL=ListUserReceiveComplimentsController.js.map
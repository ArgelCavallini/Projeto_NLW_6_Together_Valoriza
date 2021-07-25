"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComplimentController = void 0;
const CreateComplimentService_1 = require("../../../services/CreateComplimentService");
class CreateComplimentController {
    async handle(request, response) {
        const { tag_id, user_receiver, message } = request.body;
        const { user_id } = request;
        const createComplimentService = new CreateComplimentService_1.CreateComplimentService();
        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender: user_id,
            user_receiver,
            message
        });
        return response.json(compliment);
    }
}
exports.CreateComplimentController = CreateComplimentController;
//# sourceMappingURL=CreateComplimentController.js.map
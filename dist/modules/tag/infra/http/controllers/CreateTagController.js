"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagController = void 0;
const CreateTagService_1 = require("../../../services/CreateTagService");
class CreateTagController {
    async handle(request, response) {
        const { name } = request.body;
        const createTagService = new CreateTagService_1.CreateTagService();
        const tag = await createTagService.execute(name);
        return response.json(tag);
    }
}
exports.CreateTagController = CreateTagController;
//# sourceMappingURL=CreateTagController.js.map
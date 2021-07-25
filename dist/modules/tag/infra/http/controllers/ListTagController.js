"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagController = void 0;
const ListTagService_1 = require("../../../services/ListTagService");
class ListTagController {
    async handle(request, response) {
        const listTagService = new ListTagService_1.ListTagService();
        const tags = await listTagService.execute();
        return response.json(tags);
    }
}
exports.ListTagController = ListTagController;
//# sourceMappingURL=ListTagController.js.map
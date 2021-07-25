"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserReceiveComplimentsService = void 0;
const typeorm_1 = require("typeorm");
const ComplimentsRepositories_1 = require("../repositories/ComplimentsRepositories");
class ListUserReceiveComplimentsService {
    async execute(user_id) {
        const complimentsRepositories = typeorm_1.getCustomRepository(ComplimentsRepositories_1.ComplimentsRepositories);
        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id,
            },
        });
        return compliments;
    }
}
exports.ListUserReceiveComplimentsService = ListUserReceiveComplimentsService;
//# sourceMappingURL=ListUserReceiveComplimentsService.js.map
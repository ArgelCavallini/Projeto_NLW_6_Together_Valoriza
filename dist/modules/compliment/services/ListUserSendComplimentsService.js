"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserSendComplimentsService = void 0;
const typeorm_1 = require("typeorm");
const ComplimentsRepositories_1 = require("../repositories/ComplimentsRepositories");
class ListUserSendComplimentsService {
    async execute(user_id) {
        const complimentsRepositories = typeorm_1.getCustomRepository(ComplimentsRepositories_1.ComplimentsRepositories);
        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id,
            }
        });
        return compliments;
    }
}
exports.ListUserSendComplimentsService = ListUserSendComplimentsService;
//# sourceMappingURL=ListUserSendComplimentsService.js.map
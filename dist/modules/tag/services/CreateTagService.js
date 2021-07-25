"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagService = void 0;
const typeorm_1 = require("typeorm");
const TagsRepositories_1 = require("../repositories/TagsRepositories");
class CreateTagService {
    async execute(name) {
        const tagsRepositories = typeorm_1.getCustomRepository(TagsRepositories_1.TagsRepositories);
        if (!name) {
            throw new Error("Name incorrect");
        }
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });
        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
        }
        const tag = tagsRepositories.create({
            name
        });
        await tagsRepositories.save(tag);
        return tag;
    }
}
exports.CreateTagService = CreateTagService;
//# sourceMappingURL=CreateTagService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagService = void 0;
const typeorm_1 = require("typeorm");
const TagsRepositories_1 = require("../repositories/TagsRepositories");
const class_transformer_1 = require("class-transformer");
class ListTagService {
    async execute() {
        const tagsRepositories = typeorm_1.getCustomRepository(TagsRepositories_1.TagsRepositories);
        const tags = await tagsRepositories.find();
        return class_transformer_1.classToPlain(tags);
    }
}
exports.ListTagService = ListTagService;
//# sourceMappingURL=ListTagService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUTags1624407619914 = void 0;
const typeorm_1 = require("typeorm");
class CreateUTags1624407619914 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "tags",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("tags");
    }
}
exports.CreateUTags1624407619914 = CreateUTags1624407619914;
//# sourceMappingURL=1624407619914-CreateUTags.js.map
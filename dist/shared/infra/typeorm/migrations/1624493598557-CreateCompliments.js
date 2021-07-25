"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompliments1624493598557 = void 0;
const typeorm_1 = require("typeorm");
class CreateCompliments1624493598557 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "compliments",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "user_sender",
                    type: "uuid",
                },
                {
                    name: "user_receiver",
                    type: "uuid",
                },
                {
                    name: "tag_id",
                    type: "uuid",
                },
                {
                    name: "message",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
            ],
            foreignKeys: [
                {
                    name: "fk_user_sender_compliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_sender"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                },
                {
                    name: "fk_user_receiver_compliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_receiver"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                },
                {
                    name: "fk_tag_compliments",
                    referencedTableName: "tags",
                    referencedColumnNames: ["id"],
                    columnNames: ["tag_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("compliments");
    }
}
exports.CreateCompliments1624493598557 = CreateCompliments1624493598557;
//# sourceMappingURL=1624493598557-CreateCompliments.js.map
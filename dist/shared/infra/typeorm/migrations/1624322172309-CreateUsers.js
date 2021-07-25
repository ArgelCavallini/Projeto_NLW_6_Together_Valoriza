"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1624322172309 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1624322172309 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
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
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "admin",
                    type: "boolean",
                    default: false
                },
                {
                    name: "creaated_at",
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
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsers1624322172309 = CreateUsers1624322172309;
//# sourceMappingURL=1624322172309-CreateUsers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterUserAddPassword1624490410615 = void 0;
const typeorm_1 = require("typeorm");
class AlterUserAddPassword1624490410615 {
    async up(queryRunner) {
        await queryRunner.addColumn("users", new typeorm_1.TableColumn({
            name: "password",
            type: "varchar",
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn("users", "password");
    }
}
exports.AlterUserAddPassword1624490410615 = AlterUserAddPassword1624490410615;
//# sourceMappingURL=1624490410615-AlterUserAddPassword.js.map
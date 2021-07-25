"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateUserController_1 = require("../controllers/CreateUserController");
const ListUserController_1 = require("../controllers/ListUserController");
const ensureAthenticated_1 = require("../../../../../middlewares/ensureAthenticated");
const router = express_1.Router();
const createUserController = new CreateUserController_1.CreateUserController();
const listUserController = new ListUserController_1.ListUserController();
router.post("/users", createUserController.handle);
router.get("/users/", ensureAthenticated_1.ensureAthenticated, listUserController.handle);
exports.default = router;
//# sourceMappingURL=user.routes.js.map
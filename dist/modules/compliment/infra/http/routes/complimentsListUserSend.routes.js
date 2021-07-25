"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListUserSendComplimentsController_1 = require("../http/controllers/ListUserSendComplimentsController");
const ensureAthenticated_1 = require("../../../../middlewares/ensureAthenticated");
const router = express_1.Router();
const listUserSendComplimentsController = new ListUserSendComplimentsController_1.ListUserSendComplimentsController();
router.use(ensureAthenticated_1.ensureAthenticated);
router.get("/users/compliments/list_sender", ensureAthenticated_1.ensureAthenticated, listUserSendComplimentsController.handle);
exports.default = router;
//# sourceMappingURL=complimentsListUserSend.routes.js.map
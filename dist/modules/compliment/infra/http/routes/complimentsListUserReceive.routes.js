"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListUserReceiveComplimentsController_1 = require("../http/controllers/ListUserReceiveComplimentsController");
const ensureAthenticated_1 = require("../../../../middlewares/ensureAthenticated");
const router = express_1.Router();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController_1.ListUserReceiveComplimentsController();
router.use(ensureAthenticated_1.ensureAthenticated);
router.get("/users/compliments/list_receive", ensureAthenticated_1.ensureAthenticated, listUserReceiveComplimentsController.handle);
exports.default = router;
//# sourceMappingURL=complimentsListUserReceive.routes.js.map
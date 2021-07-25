"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateTagController_1 = require("../controllers/CreateTagController");
const ListTagController_1 = require("../controllers/ListTagController");
const ensureAthenticated_1 = require("../../../../../middlewares/ensureAthenticated");
const ensureAdmin_1 = require("../../../../../middlewares/ensureAdmin");
const router = express_1.Router();
const createTagController = new CreateTagController_1.CreateTagController();
const listTagController = new ListTagController_1.ListTagController();
router.use(ensureAthenticated_1.ensureAthenticated);
router.post("/tags", ensureAthenticated_1.ensureAthenticated, ensureAdmin_1.ensureAdmin, createTagController.handle);
router.get("/tags/", ensureAthenticated_1.ensureAthenticated, listTagController.handle);
exports.default = router;
//# sourceMappingURL=tag.routes.js.map
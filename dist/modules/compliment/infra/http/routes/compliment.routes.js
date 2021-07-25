"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateComplimentController_1 = require("../controllers/CreateComplimentController");
const ensureAthenticated_1 = require("../../../../../middlewares/ensureAthenticated");
const router = express_1.Router();
const createComplimentController = new CreateComplimentController_1.CreateComplimentController();
router.use(ensureAthenticated_1.ensureAthenticated);
router.post("/compliment", ensureAthenticated_1.ensureAthenticated, createComplimentController.handle);
exports.default = router;
//# sourceMappingURL=compliment.routes.js.map
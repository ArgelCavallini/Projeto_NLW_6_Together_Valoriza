"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthenticateUserController_1 = require("../controllers/AuthenticateUserController");
const router = express_1.Router();
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
router.post("/login", authenticateUserController.handle);
exports.default = router;
//# sourceMappingURL=userAuthenticate.routes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("../../../../modules/user/infra/http/routes/user.routes"));
const tag_routes_1 = __importDefault(require("../../../../modules/tag/infra/http/routes/tag.routes"));
const compliment_routes_1 = __importDefault(require("../../../../modules/compliment/infra/http/routes/compliment.routes"));
const routes = express_1.Router();
routes.use('/users', user_routes_1.default);
routes.use('/tags', tag_routes_1.default);
routes.use('/compliments', compliment_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map
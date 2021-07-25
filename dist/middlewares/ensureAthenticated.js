"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = jsonwebtoken_1.verify(token, "4edcab9456f57433e3c8c3da35249629");
        request.user_id = sub;
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
exports.ensureAthenticated = ensureAthenticated;
//# sourceMappingURL=ensureAthenticated.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
require("express-async-errors");
const upload_1 = __importDefault(require("@config/upload"));
const routes_1 = __importDefault(require("./routes"));
require("@shared/infra/typeorm");
const app = express_1.default();
app.use(cors_1.default({
    origin: [process.env.APP_WEB_URL, process.env.SITE_WEB_URL],
    allowedHeaders: ['Authorization', 'Accept', 'Content-Type', 'Origin', 'Access-Control-Allow-Origin'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/files', express_1.default.static(upload_1.default.uploadsFolder));
app.use('/images', express_1.default.static(path_1.default.resolve(__dirname, '..', '..', '..', 'assets', 'images')));
app.use('/fonts', express_1.default.static(path_1.default.resolve(__dirname, '..', '..', '..', 'assets', 'font')));
app.options('*', cors_1.default());
app.use(routes_1.default);
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            status: 'error',
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
app.listen(process.env.PORT || 3000, () => console.log("Server is running"));
//# sourceMappingURL=server.js.map
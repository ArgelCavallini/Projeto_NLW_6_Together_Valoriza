"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const tmpFolder = path_1.default.resolve(__dirname, '..', '..', 'tmp');
exports.default = {
    driver: process.env.STORAGE_DRIVER || 'disk',
    tmpFolder,
    uploadsFolder: path_1.default.resolve(tmpFolder, 'uploads'),
    tinifyApiKey: process.env.TINIFY_API_KEY,
    multer: {
        storage: multer_1.default.diskStorage({
            destination: tmpFolder,
            filename(_, file, callback) {
                const fileHash = crypto_1.default.randomBytes(10).toString('hex');
                const fileName = `${fileHash}-${file.originalname}`;
                return callback(null, fileName);
            },
        }),
        limits: {
            files: 1,
            fileSize: 1024 * 1024 * 6,
            fieldSize: 1024 * 1024 * 6,
        },
    },
    config: {
        disk: null,
    },
};
//# sourceMappingURL=upload.js.map
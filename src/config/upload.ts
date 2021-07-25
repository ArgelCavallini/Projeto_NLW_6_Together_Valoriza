import crypto from 'crypto';
import multer, { Options } from 'multer';
import path from 'path';

interface IUploadConfig {
  driver: 'disk' | 's3';
  tinifyApiKey: string;
  tmpFolder: string;
  uploadsFolder: string;
  multer: Options;
  config: {
    disk: null;
  };
}

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  driver: process.env.STORAGE_DRIVER || 'disk',
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),
  tinifyApiKey: process.env.TINIFY_API_KEY,
  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(_, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;
        return callback(null, fileName);
      },
    }),
    limits: {
      files: 1,
      fileSize: 1024 * 1024 * 6, // 6 mb
      fieldSize: 1024 * 1024 * 6, // 6 mb
    },
  },
  config: {
    disk: null,
  },
} as IUploadConfig;

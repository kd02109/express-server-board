import multer, { Multer } from 'multer';
import path from 'path';
import fs from 'node:fs';

const UploadPath = path.resolve(__dirname, '..', '..', 'uploads/');

const upload: Multer = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, UploadPath);
    },
    filename(req, file, callback) {
      const ext = path.extname(file.originalname);
      callback(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export const initUpload = () => {
  try {
    fs.readdirSync(UploadPath);
  } catch (err) {
    fs.mkdirSync(UploadPath);
  }
  return upload;
};

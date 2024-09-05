import multer from 'multer';
import fs from 'fs';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

export const fileFilter = (
    _req: any, file: Express.Multer.File, callback: multer.FileFilterCallback) => {

    if (file.mimetype.startsWith('image/')) {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

// Initialize multer with the storage configuration and file filter
export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Optional: Limit file size to 5MB
});

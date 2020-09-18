import multer from "multer";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./media/");
  },
  filename: (req, file, cb) => {
    let filename = crypto.randomBytes(12).toString("hex");
    filename += "__";
    filename += new Date().getTime();
    filename += "__";
    filename += file.originalname;

    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  )
    cb(null, true);
  else cb(null, false);
};

const ImageUploader = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

export default ImageUploader;

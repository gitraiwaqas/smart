import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();
const allowedTypes = [".pdf", ".doc", ".docx"];

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLocaleLowerCase();
  console.log(ext);
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only .pdf, .doc, and .docx files are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
export default upload;

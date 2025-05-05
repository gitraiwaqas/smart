import express from "express";
import upload from "../middleware/multer.middleware.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const result = await uploadOnCloudinary(req.file.path);
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error("🔥 Error in file upload:", error.message);
    res.status(500).json({ error: "Error uploading file to Cloudinary" });
  }
});

export default router;

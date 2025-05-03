import express from "express";
const router = express.Router();
import upload from "../middleware/multer.middleware.js";

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file);
    res.send("File received successfully!");
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

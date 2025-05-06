import uploadToCloudinary from "../utils/cloudinary.util.js";

const handleFileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await uploadToCloudinary(req.file.path);
    return res
      .status(200)
      .json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default handleFileUpload;

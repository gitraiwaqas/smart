import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dw1acx6sb",
  api_key: "548895663936765",
  api_secret: "1d7L_b2YaR994ccL74MdJ558BAM",
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "raw", // For PDF/DOC files
      folder: "resumes",
    });

    fs.unlinkSync(localFilePath); // Delete local file after success
    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
    throw new Error("Error uploading file to Cloudinary");
  }
};

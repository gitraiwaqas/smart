import dotenv from "dotenv";
dotenv.config(); // must be first
import express from "express";
import uploadRoutes from "./routes/upload.routes.js";

const app = express();

app.use("/api", uploadRoutes);

export default app;

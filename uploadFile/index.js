import express from "express";
import uploadRoutes from "../uploadFile/routes/upload.js";

const app = express();

// Home route for testing
app.get("/", (req, res) => {
  res.send("You're on the Home page!");
});

// Register upload route first
app.use("/api", uploadRoutes);

// Global error handler should come LAST
app.use((err, req, res, next) => {
  console.error("🚨 Global Error Handler:", err.message);

  if (err.name === "MulterError") {
    return res.status(400).json({ error: err.message });
  }

  res.status(500).json({ error: err.message });
});

// Start server
app.listen(5000, () => {
  console.log("App is running at http://localhost:5000");
});

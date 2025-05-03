import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to this page");
});

app.listen(5000, () => {
  console.log("App is runing on http://localhost:5000");
});

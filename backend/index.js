import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Your on Home page...");
});

app.listen(5000, () => {
  console.log(`App is runing http://localhost:5000`);
});

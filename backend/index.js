import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Your on Home page and i change on Pc check it show on laptop...");
});

app.listen(5000, () => {
  console.log(`App is runing http://localhost:5000`);
});

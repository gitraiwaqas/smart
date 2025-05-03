import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Your on Home page and i change on Pc check it show on laptop...");
});

// Using pull i reverse the code it is good thin about the 

app.listen(5000, () => {
  console.log(`App is runing http://localhost:5000`);
});

import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(9000, () => {
  console.log("running at http://localhost:9000/");
});

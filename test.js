import express from "express";

const app = express();

app.get("/example/*.json", (req, res) => {
  res.send(req.originalUrl);
});

app.get("/product", (req, res) => {
  res.json(req.route);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

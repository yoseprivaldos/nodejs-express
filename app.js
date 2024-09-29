import express from "express";

const app = express();

//basic routing
app.get("/product/:id", (req, res) => {
  res.send("Hello World");
  console.log(req);
});

app.post("/product/:id", express.json(), (req, res) => {
  console.log(req.params.id);
  res.send(`Product with ID ${req.params.id} created`);
});

app.listen(3000, () => {
  console.log("Server berjalan di port http://localhost:3000");
});

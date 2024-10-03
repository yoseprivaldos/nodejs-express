import express from "express";
import request from "supertest";

const app = express();

const router = express.Router();

router.use((req, res, next) => {
  console.log(`Receive request: ${req.originalUrl}`);
  next();
});

router.get("/products", (req, res) => {
  res.send("Get Products");
});

router.post("/products/post", (req, res) => {
  res.send("Post Products");
});

router.put("/products/:id", (req, res) => {
  res.send("Put Products");
});

app.use("/", router);

test("test router", async () => {
  const response1 = await request(app).get("/products");
  const response2 = await request(app).post("/products/post");
  const response3 = await request(app).put("/products/123123");

  expect(response1.text).toBe("Get Products");
  expect(response2.text).toBe("Post Products");
  expect(response3.text).toBe("Put Products");
});

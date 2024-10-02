import express from "express";
import request from "supertest";

const app = express();

const router = express.Router();

router.get("/products", (req, res) => {
  res.send("Get Product");
});

router.post("/products/post", (req, res) => {
  res.send("Post Product");
});

router.put("/product/:id", (req, res) => {
  res.send("Put Product");
});

test("test router", async () => {
  const response1 = await request(router).get("/products");
  const response2 = await request(router).post("/products/post");
  const response3 = await request(router).put("/products/123123");

  expect(response1.text).toBe("Get Products");
  expect(response2.text).toBe("Post Products");
  expect(response3.text).toBe("Put Products");
});

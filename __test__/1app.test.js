import request from "supertest";
import express from "express";

const app = express();

app.get("/", (__, res) => {
  res.send("Hello World");
});

app.get("/product/:id", (req, res) => {
  res.send(`Hello World this is your req: ${req.params.id}`);
});

test("Hello World", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello World");
});

test("Hello World With Params", async () => {
  const response = await request(app).get("/product/12345");
  expect(response.text).toBe("Hello World this is your req: 12345");
});

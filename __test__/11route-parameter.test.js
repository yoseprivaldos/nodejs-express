import express from "express";
import request from "supertest";

const app = express();

app.get("/products/:id", (req, res) => {
  res.send(`Product: ${req.params.id}`);
});

app.get("/examples/:id(\\d+)", (req, req) => {
  res.send(`Example: ${req.params.id}`);
});

test("test route parameter", async () => {
  const response = await request(app).get("/products/123iniIdnya123");
  expect(response.text).toBe("Product: 123iniIdnya123");
});

test("test route parameter 2", async () => {
  const response = await request(app).get("/examples/123123");
  expect(response.text).toBe("Example: 123123");
});

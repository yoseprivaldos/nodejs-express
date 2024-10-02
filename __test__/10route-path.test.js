import express from "express";
import request from "supertest";

const app = express();

app.get(`/products/*.json`, (req, res) => {
  res.send(req.originalUrl);
});

app.get("/categories/*(\\d+).json", (req, res) => {
  res.send(req.originalUrl);
});

test("test route path 1", async () => {
  const response = await request(app).get("/products/contoh.json");
  expect(response.text).toBe("/products/contoh.json");
});

test("test route path 2", async () => {
  const response = await request(app).get("/products/123.json");
  expect(response.text).toBe("/products/123.json");
});

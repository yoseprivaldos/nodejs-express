import express from "express";
import request from "supertest";

test("Reques", async () => {
  const app = express();
  app.get("/", (req, res) => {
    res.send(`Hello ${req.query.name}`);
  });

  const response = await request(app).get("/").query({ name: "World" });

  expect(response.text).toBe("Hello World");
});

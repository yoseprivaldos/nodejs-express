import express from "express";
import request from "supertest";

const app = express();

test("response status", async () => {
  app.get("/", (req, res) => {
    if (req.query.name) {
      res.status(200).send(`Hello ${req.query.name}`);
    } else {
      res.status(400).end();
    }
  });

  //localhost:3000:/users?name=Yosep
  let response = await request(app).get("/").query({ name: "Yosep" });

  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Yosep");

  response = await request(app).get("/");
  expect(response.status).toBe(400);
});

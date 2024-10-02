import express from "express";
import request from "supertest";

const app = express();

// midleware console
const logger = (req, res, next) => {
  console.info(`Receive request: ${req.method} ${req.url}`);
  next();
};

// midleware set header
const setHeader = (req, res, next) => {
  res.set("X-Powered-By", "Yosep R Silaban");
  next();
};
// midleware validation apiKey
const apiKeyValidation = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(400).end();
  }
};

app.use(logger);
app.use(setHeader);
app.use(apiKeyValidation);

// rooute
app.get("/", (req, res) => {
  res.send(`Hello World`);
});

// testing
test("test logger", async () => {
  const response = await request(app).get("/").query({ apiKey: 123123 });
  expect(response.text).toBe("Hello World");
});

test("test header", async () => {
  const response = await request(app).get("/");
  expect(response.get("X-Powered-By")).toBe("Yosep R Silaban");
});

test("test validation apiKey", async () => {
  const response = await request(app).get("/").query({ apiKey: 12313 });
  expect(response.get("X-Powered-By")).toBe("Yosep R Silaban");
});

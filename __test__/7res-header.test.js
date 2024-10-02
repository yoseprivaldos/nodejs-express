import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res
    .set({
      "X-Powered-By": "AVRGJOO",
      "X-Author": "Yosep Rivaldo Silaban",
    })
    .end();
});

test("respond header", async () => {
  const response = await request(app).get("/");

  expect(response.get("X-Powered-By")).toBe("AVRGJOO");
  expect(response.get("X-Author")).toBe("Yosep Rivaldo Silaban");
});

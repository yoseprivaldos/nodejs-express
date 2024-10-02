import express from "express";
import request from "supertest";

const app = express();

app
  .route("/products")
  .get((req, res) => {
    res.send("Get Products");
  })
  .post((req, res) => {
    res.send("Post Products");
  })
  .put((req, res) => {
    res.send("Put Products");
  });

test("test route function", async () => {
  const response1 = await request(app).get("/products");
  const response2 = await request(app).post("/products");
  const response3 = await request(app).put("/products");

  expect(response1.text).toBe("Get Products");
  expect(response2.text).toBe("Post Products");
  expect(response3.text).toBe("Put Products");
});

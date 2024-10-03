import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  const name = req.cookies["name"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/" });
  res.send(`Hello ${name}`);
});

test("test cookie read", async () => {
  const response = await request(app).get("/").set("Cookie", "name=Yosep");
  expect(response.text).toBe("Hello Yosep");
});

test("test cookie write", async () => {
  const response = await request(app).post("/login").send({ name: "Yosep" });
  expect(response.get("Set-Cookie").toString()).toBe("Login=Yosep; Path=/");
  expect(response.text).toBe("Hello Yosep");
});

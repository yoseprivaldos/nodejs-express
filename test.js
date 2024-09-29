import express from "express";

const app = express();
const userRoute = express.Router();
const productRoute = express.Router();

userRoute.get("/", () => {
  console.log("get user");
});
userRoute.post("/", () => {
  console.log("user post");
});
userRoute.put("/:id", () => {
  console.log("user update");
});

productRoute.get("/", () => console.log("get product"));
productRoute.post("/", () => console.log("post product"));
productRoute.put("/:id", () => console.log("update product"));

app.use("/products", productRoute);
app.use("/users", userRoute);

console.dir(app.path());

app.listen(3000);

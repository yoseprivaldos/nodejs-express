import express from "express";

const app = express();
// application-level middleware
app.use();

// router-level middeware
const router = express.Router();
router.use();

// error-handling middleware
// terdapat 4 paramater error, request, response, next
// pengunaan mirip dengan application middleware

app.use((err, req, res, next) => {});

// build-in middleware
// middelware yang sudah ada secara otomatis di express
express.json();
express.text();
express.raw();
express.urlencoded();
express.static();

// third-party middleware

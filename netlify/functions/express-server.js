const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({
    message: "hello world - from express!",
  });
});

app.use(`/.netlify/functions/express-server`, router);

module.exports = app;
module.exports.handler = serverless(app);

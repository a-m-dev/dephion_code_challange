import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import AppConfig from "./utils/AppConfig";

import corsMiddleware from "./middlewares/cors.middleware";

// mongose promise
mongoose.Promise = global.Promise;

// app
const app = express();

// handle CORS
app.use(corsMiddleware);

// setup middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.status(200).json({
    hi: "its ok now...",
  });
});

// start server
(async function () {
  try {
    app.listen(AppConfig.PORT, () => {
      console.log(`
        >>> CookBook server is ready on http://localhost:${AppConfig.PORT}
      `);
    });
  } catch (e) {
    console.log(
      " >>>>> Cannot connect to Database and app fails!",
      JSON.stringify(e, null, 2)
    );
  }
})();

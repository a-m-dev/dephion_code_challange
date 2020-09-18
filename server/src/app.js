import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import Connect from "./utils/mongoConnect";

import corsMiddleware from "./middlewares/cors.middleware";
import noRouteMatch from "./middlewares/noRouteMatch.middleware";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";

import AppConfig from "./utils/AppConfig";

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

// error handlings
app.use(noRouteMatch);
app.use(globalErrorHandler);

// start server
(async function () {
  try {
    await Connect();
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

require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

import AppConfig from "./utils/AppConfig";
import Connect from "./utils/mongoConnect";
import sleep from "./utils/sleep";

import corsMiddleware from "./middlewares/cors.middleware";
import noRouteMatch from "./middlewares/noRouteMatch.middleware";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";

import UserRouter from "./resources/user/user.router";
import CategoryRouter from "./resources/category/category.router";
import RecipeRouter from "./resources/recipe/recipe.router";

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
app.use(morgan("dev"));
app.use("/media", express.static("media"));
app.use("/s", express.static(path.resolve(__dirname, "public")));

app.use(`/api/${AppConfig.apiVersions["v1.0"]}/user`, UserRouter);
app.use(`/api/${AppConfig.apiVersions["v1.0"]}/category`, CategoryRouter);
app.use(`/api/${AppConfig.apiVersions["v1.0"]}/recipe`, RecipeRouter);

// error handlings
app.use(noRouteMatch);
app.use(globalErrorHandler);

// start server

(async function BootUpServer() {
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
    await sleep(1000);
    console.log(">>> retrying to connect to db");
    BootUpServer();
  }
})();

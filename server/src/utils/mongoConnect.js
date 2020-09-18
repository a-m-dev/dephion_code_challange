import mongoose from "mongoose";
import AppConfig from "./AppConfig";

function Connect(ops = {}) {
  return mongoose.connect(
    `${AppConfig.mongoDB_URI}/${AppConfig.dbName}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ...ops,
    }
  );
}

export default Connect;

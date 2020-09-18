import mongoose from "mongoose";
import AppConfig from "./AppConfig";

function Connect(ops = {}) {
  return mongoose.connect(
    `${AppConfig.mongoDB_URI}/${AppConfig.dbName}?authSource=admin`,
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      ...ops,
    }
  );
}

export default Connect;

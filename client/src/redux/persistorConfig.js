import storage from "redux-persist/lib/storage";

const persistorConfig = {
  key: "root",
  storage,
  whitelist: ["GlobalData"],
};

export default persistorConfig;

import pkg from "../../package.json";

const AppConfig = {
  PORT: 4010,
  apiVersions: {
    "v1.0": "v1.0",
  },
  buildVersion: pkg.version,
};

export default AppConfig;

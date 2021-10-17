import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://localhost:5000",
  },
  staging: {
    apiUrl: "http://localhost:5000",
  },
  prod: {
    apiUrl: "http://localhost:5000",
  },
};

getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;

  return settings.prod;
};

export default getCurrentSettings();

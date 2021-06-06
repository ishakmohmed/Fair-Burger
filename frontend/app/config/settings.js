import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://fair-burger-node-backend.herokuapp.com",
  },
  staging: {
    apiUrl: "https://fair-burger-node-backend.herokuapp.com",
  },
  prod: {
    apiUrl: "https://fair-burger-node-backend.herokuapp.com",
  },
};

getCurrentSettings = () => {
  if (__DEV__) return settings.dev;

  if (Constants.manifest.releaseChannel === "staging") return settings.staging;

  return settings.prod;
};

export default getCurrentSettings();

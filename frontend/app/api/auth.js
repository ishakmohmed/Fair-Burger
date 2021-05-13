import client from "./client";

const login = (email, password) => client.post("/api/users/login", { email, password });

export default {
  login,
};

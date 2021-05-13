import client from "./client";

const register = (userInfo) => client.post("/api/users", userInfo);

export default { register };

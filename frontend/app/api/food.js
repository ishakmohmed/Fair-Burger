import client from "./client";

const addFood = (data) => {
  client.post("/api/burgers", data);
};

export default {
  addFood,
};

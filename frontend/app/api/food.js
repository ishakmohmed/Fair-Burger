import client from "./client";

const addFood = (data) => {
  client.post("/api/burgers", data);
};

const getFoods = () => client.get("/api/burgers");

const deleteFood = (id) => client.post("/api/burgers", id);

export default {
  addFood,
  getFoods,
};

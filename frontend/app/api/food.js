import client from "./client";

const addFood = (data) => {
  client.post("/api/burgers", data);
};

const getFoods = () => client.get("/api/burgers");

const deleteFood = async (id) => {
  return await client.delete(`/api/burgers/${id}`);
};

export default {
  addFood,
  deleteFood,
  getFoods,
};

import client from "./client";

const addFood = (data) => {
  client.post("/api/burgers", data);
};

const getFoods = (id) => client.get(`/api/burgers/${id}`);

const deleteFood = async (id) => {
  return await client.delete(`/api/burgers/${id}`);
};

export default {
  addFood,
  deleteFood,
  getFoods,
};

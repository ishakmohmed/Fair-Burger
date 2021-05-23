import client from "./client";

const addFood = async (data) => {
  await client.post("/api/burgers", data);
};

const getFoods = async (id) => {
  return await client.get(`/api/burgers/${id}`);
};

const deleteFood = async (id) => {
  return await client.delete(`/api/burgers/${id}`);
};

export default {
  addFood,
  deleteFood,
  getFoods,
};

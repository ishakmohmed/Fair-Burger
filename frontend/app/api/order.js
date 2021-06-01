import client from "./client";

const addOrder = async (data) => {
  await client.post("/api/orders", data);
};

const getOrders = async (id) => {
  return await client.get(`/api/orders/${id}`);
};

const deleteOrder = async (id) => {
  return await client.delete(`/api/orders/${id}`);
};

export default {
  addOrder,
  deleteOrder,
  getOrders,
};

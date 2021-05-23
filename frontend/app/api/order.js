import client from "./client";

const addOrder = async (data) => {
  await client.post("/api/orders", data);
};

export default {
  addOrder,
};

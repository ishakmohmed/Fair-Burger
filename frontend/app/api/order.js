import client from "./client";

const addOrder = (data) => {
  client.post("/api/orders", data);
};

export default {
  addOrder,
};

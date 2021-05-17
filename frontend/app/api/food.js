import client from "./client";

const addFood = (data) => {
  const modifiedData = { ...data };

  console.log("the encoded data is >>>", modifiedData);

  // client.post("/api/burgers", modifiedData);
};

export default {
  addFood,
};

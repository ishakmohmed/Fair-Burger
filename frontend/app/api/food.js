import client from "./client";

const addFood = ({ name, price, images }) => {
  const data = new FormData();
  data.append("name", name);
  data.append("price", price);

  images.forEach((image) => {
    data.append("images", image);
  });

  client.post("/api/burgers", {
    data,
  });
};

export default {
  addFood,
};

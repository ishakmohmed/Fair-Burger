import client from "./client";

const addFood = ({ name, price, images }) => {
  const data = new FormData();
  data.append("name", name);
  data.append("price", price);

  images.forEach((image) => {
    data.append("images", name);
  });

  console.log("THIS LINE HAS BEEN REACHED.");
  console.log("AND THE DATA IS >>>");
  console.log(data);

  client.post("/api/burgers", {
    data,
  });
};

export default {
  addFood,
};

import client from "./client";

const addFood = (data) => {
  // const modifiedData = { ...data };

  // modifiedData.images.forEach(async (image) => {
  //   data = await client.post(
  //     "	https://api.cloudinary.com/v1_1/ishaks-cloudinary/image/upload",
  //     image
  //   );
  //   image = data.secure_url;
  // });

  client.post("/api/burgers", data);
};

export default {
  addFood,
};

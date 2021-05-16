import asyncHandler from "express-async-handler";
import Burger from "../models/burger.js";

const addBurger = asyncHandler(async (req, res) => {
  const { images, name, price } = req.body;

  if (!images || !name || !price) {
    res.status(400);
    throw new Error(
      "Bad request. Please make sure you enter name, price, and image of burger."
    );
  }

  const createdBurger = await Burger.create({
    image,
    name,
    prices,
  });

  if (createdBurger) res.status(201);
  else {
    res.status(400);
    throw new Error("Invalid burger data.");
  }
});

const deleteBurger = asyncHandler(async (req, res) => {
  // add after this
});

export { addBurger };

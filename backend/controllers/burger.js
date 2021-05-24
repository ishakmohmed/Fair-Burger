import asyncHandler from "express-async-handler";
import Burger from "../models/burger.js";

const addBurger = asyncHandler(async (req, res) => {
  const { userId, name, price } = req.body;

  if (!userId || !name || !price) {
    res.status(400);
    throw new Error(
      "Bad request. Please make sure you enter name, price, and image(s) of burger."
    );
  }

  const createdBurger = await Burger.create({
    userId,
    name,
    price,
  });

  if (createdBurger) res.status(201).json(createdBurger);
  else {
    res.status(400);
    throw new Error("Invalid burger data.");
  }
});

const deleteBurger = asyncHandler(async (req, res) => {
  const burger = await Burger.findById(req.params.id);

  if (burger) {
    await burger.remove();
    res.json({ message: "Food removed." });
  } else {
    res.status(404);
    throw new Error("Food not found.");
  }
});

const getBurgers = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const burgers = await Burger.find({ userId });

  if (!burgers) {
    res.status(404);
    throw new Error("No burger found.");
  }

  res.json(burgers);
});

export { addBurger, deleteBurger, getBurgers };

import asyncHandler from "express-async-handler";
import Order from "../models/order.js";

const addOrder = asyncHandler(async (req, res) => {
  const { customerName, orderItems } = req.body;

  if (!customerName || !orderItems) {
    res.status(400);
    throw new Error(
      "Bad request. Please make sure you enter customer's name and his/hers order items."
    );
  }

  const createdOrder = await Order.create({
    customerName,
    orderItems,
  });

  if (createdOrder) res.status(201);
  else {
    res.status(400);
    throw new Error("Invalid order data.");
  }
});

export { addOrder };

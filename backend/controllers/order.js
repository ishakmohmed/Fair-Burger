import asyncHandler from "express-async-handler";
import Order from "../models/order.js";

const addOrder = asyncHandler(async (req, res) => {
  const { userId, customer, orderItems } = req.body;

  if (!userId || !customer || !orderItems) {
    res.status(400);
    throw new Error(
      "Bad request. Please make sure you enter customer's name and his/hers order items."
    );
  }

  const createdOrder = await Order.create({
    userId,
    customer,
    orderItems
  });

  if (createdOrder) res.status(201);
  else {
    res.status(400);
    throw new Error("Invalid order data.");
  }
});

export { addOrder };

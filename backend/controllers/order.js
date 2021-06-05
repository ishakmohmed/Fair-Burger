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
    orderItems,
  });

  if (createdOrder) res.status(201).json(createdOrder);
  else {
    res.status(400);
    throw new Error("Invalid order data.");
  }
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.remove();
    res.json({ message: "Order removed." });
  } else {
    res.status(404);
    throw new Error("Order not found.");
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const orders = await Order.find({ userId });

  if (!orders) {
    res.status(404);
    throw new Error("No order found.");
  }

  res.json(orders);
});

export { addOrder, deleteOrder, getOrders };

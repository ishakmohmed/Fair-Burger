import express from "express";
const router = express.Router();
import { addOrder, deleteOrder, getOrders } from "../controllers/order.js";

router.route("/").post(addOrder);
router.route("/:id").get(getOrders).delete(deleteOrder);

export default router;

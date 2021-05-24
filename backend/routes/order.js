import express from "express";
const router = express.Router();
import { addOrder, getOrders } from "../controllers/order.js";

router.route("/").post(addOrder);
router.route("/:id").get(getOrders);

export default router;

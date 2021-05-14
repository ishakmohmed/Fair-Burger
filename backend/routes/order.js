import express from "express";
const router = express.Router();
import { addOrder } from "../controllers/order.js";

router.route("/").post(addOrder);

export default router;

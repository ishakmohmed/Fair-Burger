import express from "express";
const router = express.Router();
import { addBurger, getBurgers } from "../controllers/burger.js";

router.route("/").get(getBurgers).post(addBurger);

export default router;

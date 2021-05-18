import express from "express";
const router = express.Router();
import { addBurger, deleteBurger, getBurgers } from "../controllers/burger.js";

router.route("/").get(getBurgers).post(addBurger);
router.route("/:id").delete(deleteBurger);

export default router;

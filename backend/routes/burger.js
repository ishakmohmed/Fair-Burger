import express from "express";
const router = express.Router();
import { addBurger, deleteBurger, getBurgers } from "../controllers/burger.js";

router.route("/").post(addBurger);
router.route("/:id").get(getBurgers).delete(deleteBurger);

export default router;

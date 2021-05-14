import express from "express";
const router = express.Router();
import { addBurger } from "../controllers/burger.js";

router.route("/").post(addBurger);

export default router;

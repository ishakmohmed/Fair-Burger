import express from "express";
const router = express.Router();
import {
  authenticateUser,
  registerUser,
} from "../controllers/user.js";

router.route("/").post(registerUser);
router.post("/login", authenticateUser);

export default router;

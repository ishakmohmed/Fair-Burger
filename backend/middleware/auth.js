import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  // req.header.authorization = Bearer superlongjwt123. The prefix "Bearer" is just a convention.

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await User.findById(payload.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Authorization failed. Invalid token.");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Authorization failed. No token found.");
  }
});

export { protectRoute };

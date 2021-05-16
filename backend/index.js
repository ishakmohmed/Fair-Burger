import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/error.js";

import userRoutes from "./routes/user.js";
import burgerRoutes from "./routes/burger.js";
import orderRoutes from "./routes/order.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/burgers", burgerRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(
    `Server is running. NODE_ENV=${process.env.NODE_ENV}. PORT=${process.env.PORT}.`
  );
});

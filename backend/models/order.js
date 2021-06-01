import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    customer: {
      type: String,
      required: true,
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);

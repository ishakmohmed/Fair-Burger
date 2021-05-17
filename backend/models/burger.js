import mongoose from "mongoose";

const burgerSchema = mongoose.Schema(
  {
    images: [
      {
        type: String,
        required: true,
      },
    ],
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Burger", burgerSchema);

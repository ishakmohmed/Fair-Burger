import mongoose from "mongoose";

const burgerSchema = mongoose.Schema(
  {
    images: [String],
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

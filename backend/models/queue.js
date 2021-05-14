import mongoose from "mongoose";

const queueSchema = mongoose.Schema(
  {
    queue: [
      {
        order: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Order",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Queue", queueSchema);

import mongoose from "mongoose";

const burgerSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// before saving to db, I'm automatically setting the qty key to 0 initially
// and then the component that uses this (FoodInOrderScreen component) will get
// this initial data which can be increased/decreased. Without long explanation,
// the reason I need this is to ensure FoodInOrderScreen component to re-render
// after the user submits an order.
burgerSchema.pre("save", async function (next) {
  this.qty = 0;
  next();
});

export default mongoose.model("Burger", burgerSchema);

import mongoose from "mongoose";

// Customer schema
const carStockSchema = mongoose.Schema({
  bodyStyle: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("Cars", carStockSchema);

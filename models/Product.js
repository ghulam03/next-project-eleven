import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
    // rating: { type: Number, required: true, default: 0 },
    // slug: { type: String, required: true, unique: true },
    // image: { type: String, required: true },
    // numReviews: { type: Number, required: true, default: 0 },
    // countInStock: { type: Number, required: true, default: 0 },
    // isFeatured: { type: Boolean, default: false },
    // banner: String,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;

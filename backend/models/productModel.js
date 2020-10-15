import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    packed_weight: {
      type: String,
      required: true,
    },
    packed_size: {
      type: String,
      required: true,
    },
    floor_dimensions: {
      type: String,
      required: true,
    },
    peak_height: {
      type: String,
      required: true,
    },
    door_count: {
      type: String,
      required: true,
    },
    canopy_fabric: {
      type: String,
      required: true,
    },
    floor_fabric: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
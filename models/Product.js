








// models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price'],
    },
    // If discountPrice exists and is less than price, it shows as a "Deal"
    discountPrice: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      enum: ['Electronics', 'Clothing', 'Accessories', 'Home', 'Tech'], // You can expand this list
    },
    image: {
      type: String,
      default: '🛍️', // Can be a URL from Cloudinary or an emoji for now
    },
    stock: {
      type: Number,
      default: 10,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { 
    // This automatically adds 'createdAt' and 'updatedAt' fields
    timestamps: true 
  }
);

// This check prevents Next.js from re-compiling the model during hot-reloads
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
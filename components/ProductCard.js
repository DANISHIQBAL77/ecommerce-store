// components/ProductCard.js
"use client";
import { useCart } from "@/context/CartContext";
import Button from "./ui/Button";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="bg-gray-100 h-48 rounded-xl mb-4 flex items-center justify-center text-4xl">
        {product.image}
      </div>
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-2xl font-black my-2">${product.price}</p>
      
      <Button 
        variant="primary" 
        className="w-full" 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </div>
  );
}
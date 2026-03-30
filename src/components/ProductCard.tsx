"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded"
        />

        <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>

        <button
          onClick={(e) => {
            e.preventDefault(); // IMPORTANT (prevents navigation)
            addToCart(product);
          }}
          className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

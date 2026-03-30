"use client";

import { useParams } from "next/navigation";
import { useCart } from "../../../context/CartContext";
import { Product, products } from "../../../data/products";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-6">
      <img src={product.image} className="w-80 rounded" />

      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white px-6 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

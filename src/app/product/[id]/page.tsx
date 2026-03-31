"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/CartContext";
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({
          id: docSnap.id,
          ...(docSnap.data() as Omit<Product, "id">),
        });
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

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

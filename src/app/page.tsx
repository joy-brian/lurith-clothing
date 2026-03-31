"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetching products...");
      const querySnapshot = await getDocs(collection(db, "products"));
      console.log("Snapshot:", querySnapshot);
      console.log("Docs:", querySnapshot.docs.length);

      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Product, "id">),
      }));
      console.log(items);

      setProducts(items);
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <h1 className="text-3xl font-bold text-center mt-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Product, "id">),
      }));
      setProducts(items);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      {products.map((p) => (
        <div key={p.id}>
          <img src={p.image} />
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}

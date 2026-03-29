"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">Lurith</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
      </div>

      <Link href="/cart">🛒 ({cart.length})</Link>
    </nav>
  );
}

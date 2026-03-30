"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <Link href="/" className="text-xl font-bold">
        Lurith
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/cart">🛒 ({cart.length})</Link>

        {user ? (
          <>
            <span className="text-sm">{user.email}</span>
            <button onClick={logout} className="text-sm text-red-500">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

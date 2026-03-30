"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border p-4 rounded"
            >
              <img src={item.image} className="w-20 h-20 object-cover" />

              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => decreaseQty(item.name)}>➖</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.name)}>➕</button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.name)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-xl font-bold mt-6">Total: ₹{total}</h2>
    </div>
  );
}

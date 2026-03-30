import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <h1 className="text-3xl font-bold text-center mt-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </main>
  );
}

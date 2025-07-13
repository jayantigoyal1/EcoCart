
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaLeaf, FaUserCircle } from "react-icons/fa";
import { Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://127.0.0.1:5000/api/products").then((res) => res.json()),
  });

  const filteredProducts = products.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 pb-20">
      {/* 🔝 Header */}
      <div className="bg-emerald-600 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">ECOCART</h1>
          <p className="text-xs opacity-90">Mumbai, India</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-right">
            <p className="text-xs opacity-80">Green Wallet</p>
            <p className="font-bold">2,450 pts</p>
          </div>
          <FaUserCircle size={28} />
        </div>
      </div>

      {/* 🔍 Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-emerald-500" />
          <Input
            placeholder="Search eco-friendly products..."
            className="pl-10 bg-emerald-100 border border-emerald-300 placeholder-emerald-700 text-emerald-900"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 🌱 Eco Impact */}
      <div className="px-4">
        <div className="bg-emerald-100 p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-emerald-900">Your Eco Impact</p>
            <TrendingUp className="text-emerald-800 h-4 w-4" />
          </div>
          <div className="flex justify-between text-center text-sm text-emerald-800">
            <div>
              <p className="text-lg font-bold text-emerald-900">47.20</p>
              <p className="text-xs">kg CO₂ saved</p>
            </div>
            <div>
              <p className="text-lg font-bold text-emerald-900">23</p>
              <p className="text-xs">Green purchases</p>
            </div>
            <div>
              <p className="text-lg font-bold text-yellow-600">₹340.00</p>
              <p className="text-xs">Rewards earned</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-3">
        <Link to="weekly-stats">
          <button className="w-full bg-white border border-emerald-300 text-emerald-700 px-4 py-2 rounded-lg shadow hover:bg-emerald-50 transition-all">
            📈 View Weekly Stats
          </button>
        </Link>
      </div>


      {/* 🛍️ Featured Products */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-semibold text-emerald-900">
            Featured Products
          </h2>
          <Link to="/search">
            <button className="text-emerald-700 text-sm font-medium hover:underline">
              View All
            </button>
          </Link>
        </div>
        
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow space-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-emerald-900 text-sm">
                    {product.name}
                  </h3>
                  <p className="text-xs text-emerald-600">{product.brand}</p>
                </div>
                <div className="bg-emerald-200 text-xs font-semibold px-2 py-0.5 rounded-full text-emerald-900">
                  EcoScore {product.ecoScore ?? 92}
                </div>
              </div>

              <div className="text-sm font-bold text-emerald-900">
                ₹{product.price ?? 899.0}{" "}
                <span className="line-through text-xs text-emerald-500">
                  ₹{product.originalPrice ?? 1299.0}
                </span>
              </div>

              <div className="bg-emerald-100 px-3 py-2 rounded flex justify-between text-sm items-center">
                <div className="flex gap-2 items-center text-emerald-800">
                  <FaLeaf className="text-green-600" />
                  <span>Low Carbon Choice</span>
                </div>
                <span className="font-medium text-emerald-900">
                  -2.10 kg CO₂
                </span>
              </div>

              <div className="flex justify-between items-center mt-1">
                <p className="text-yellow-600 font-medium text-sm">
                  Earn +85 pts
                </p>
                <button className="bg-emerald-600 text-white text-sm px-4 py-1 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-center text-emerald-700 py-6">
              No products found matching "{searchQuery}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

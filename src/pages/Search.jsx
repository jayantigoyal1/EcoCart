// src/pages/Search.jsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FaLeaf } from "react-icons/fa";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const recentSearches = ["Toothbrush", "Shampoo", "Reusable Bag"];

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://127.0.0.1:5000/api/products").then((res) => res.json()),
  });

  const filtered = products.filter((p) =>
    (p.name + p.brand).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 space-y-4 pb-20">
      {/* 🔍 Search Input */}
      <div className="sticky top-0 bg-green-50 z-10 pb-2">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 text-emerald-500" />
          <Input
            placeholder="Search eco-friendly products..."
            className="pl-10 bg-emerald-100 border border-emerald-300 placeholder-emerald-700 text-emerald-900"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 🕘 Recent Searches */}
      {searchQuery === "" && (
        <div>
          <h2 className="text-sm font-semibold text-emerald-800 mb-2">
            Recent Searches
          </h2>
          <div className="flex gap-2 flex-wrap">
            {recentSearches.map((term) => (
              <button
                key={term}
                className="bg-emerald-100 px-3 py-1 rounded-full text-sm text-emerald-800"
                onClick={() => setSearchQuery(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ♻️ Product Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold text-emerald-900">
            Products Found
          </h2>
          <span className="text-sm text-emerald-600">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {isLoading && <p className="text-emerald-700">Loading products...</p>}

        {!isLoading && filtered.length === 0 && (
          <p className="text-emerald-700">No products match "{searchQuery}"</p>
        )}

        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-2xl shadow-md space-y-2 border border-emerald-100"
          >
            {/* Top row: name + ecoscore */}
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-semibold text-emerald-900">
                  {product.name}
                </h3>
                <p className="text-xs text-emerald-700">{product.brand}</p>
              </div>
              <span className="bg-emerald-200 text-emerald-900 text-xs font-bold px-2 py-0.5 rounded-full">
                {product.ecoScore ?? 90}
              </span>
            </div>

            {/* Price */}
            <div className="text-sm text-emerald-900 font-bold">
              ₹{product.price ?? 0}{" "}
              <span className="text-xs text-emerald-500 line-through">
                ₹{product.originalPrice ?? 0}
              </span>
            </div>

            {/* CO2 Info */}
            <div className="bg-emerald-50 text-sm p-2 rounded-lg flex justify-between items-center text-emerald-800">
              <div className="flex items-center gap-1">
                <FaLeaf className="text-green-600" />
                <span>Low Carbon Choice</span>
              </div>
              <span className="font-medium">-2.1 kg CO₂</span>
            </div>

            {/* Add to Cart */}
            <div className="flex justify-between items-center">
              <p className="text-yellow-600 font-medium">Earn +85 pts</p>
              <button className="bg-emerald-600 text-white text-sm px-4 py-1 rounded-xl shadow-sm hover:bg-emerald-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

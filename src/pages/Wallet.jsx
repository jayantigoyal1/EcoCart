import { useQuery } from "@tanstack/react-query";
import { FaGift, FaTruck, FaLeaf, FaCoins } from "react-icons/fa";
import { PiShoppingBagFill } from "react-icons/pi";

export default function Wallet() {
  const { data: wallet = { points: 2450, co2Saved: 47.2, purchases: 23 }, isLoading } = useQuery({
    queryKey: ["wallet"],
    queryFn: () =>
      fetch("http://127.0.0.1:5000/api/wallet").then((res) => res.json()),
  });

  const rewardItems = [
    {
      id: 1,
      title: "₹50 Cashback",
      desc: "Instant cashback to wallet",
      cost: 500,
      icon: <FaCoins className="text-yellow-500" />,
    },
    {
      id: 2,
      title: "Free Shipping",
      desc: "On your next 3 orders",
      cost: 300,
      icon: <FaTruck className="text-blue-500" />,
    },
    {
      id: 3,
      title: "Mystery Reward",
      desc: "Surprise eco gift",
      cost: 800,
      icon: <FaGift className="text-purple-500" />,
    },
    {
      id: 4,
      title: "₹100 Discount Coupon",
      desc: "Valid on next purchase",
      cost: 1000,
      icon: <PiShoppingBagFill className="text-emerald-500" />,
    },
  ];

  return (
    <div className="p-4 pb-20 space-y-4">
      <h1 className="text-xl font-bold text-emerald-900 mb-2">Wallet</h1>

      {/* Wallet Summary Card */}
      <div className="bg-emerald-100 p-4 rounded-xl shadow flex justify-between items-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="space-y-1">
              <p className="text-xs text-gray-600">Total Eco Points</p>
              <p className="text-2xl font-bold text-emerald-900">{wallet.points}</p>
              <div className="flex text-sm text-emerald-800 space-x-4 mt-1">
                <div className="flex items-center gap-1">
                  <FaLeaf className="text-green-600" /> {wallet.co2Saved} kg
                </div>
                <div className="flex items-center gap-1">
                  <PiShoppingBagFill className="text-emerald-700" /> {wallet.purchases}
                </div>
              </div>
            </div>
            <FaCoins size={36} className="text-yellow-500" />
          </>
        )}
      </div>

      {/* Rewards Section */}
      <h2 className="text-base font-semibold text-emerald-900">Redeem Rewards</h2>
      <div className="space-y-3">
        {rewardItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-start"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-emerald-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-yellow-600">{item.cost} pts</p>
              <button className="mt-1 bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">
                Redeem
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

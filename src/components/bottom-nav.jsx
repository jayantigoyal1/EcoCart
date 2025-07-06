// components/bottom-nav.jsx
export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-2 flex justify-around z-10">
      <button className="flex flex-col items-center text-gray-600 hover:text-eco-green">
        <span className="text-sm">Home</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-eco-green">
        <span className="text-sm">Rewards</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-eco-green">
        <span className="text-sm">Profile</span>
      </button>
    </nav>
  );
}

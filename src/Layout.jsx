// src/Layout.jsx
import { Outlet, useLocation, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { PiHouseFill, PiWalletFill } from "react-icons/pi";
import { Search as SearchIcon } from "lucide-react";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-green-50 relative pb-16">
      {/* 👇 This will render the child page (Home, Search, Wallet...) */}
      <Outlet />

      {/* 🚀 Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-inner flex justify-center z-10">
        <div className="w-full max-w-sm flex justify-around p-2">
          <NavItem to="/" label="Home" icon={<PiHouseFill />} active={pathname === "/"} />
          <NavItem to="/search" label="Search" icon={<SearchIcon />} active={pathname === "/search"} />
          <NavItem to="/wallet" label="Wallet" icon={<PiWalletFill />} active={pathname === "/wallet"} />
          <NavItem to="/profile" label="Profile" icon={<FaUserCircle />} active={pathname === "/profile"} />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center px-4 py-1 rounded-xl transition ${
        active ? "bg-black text-white" : "text-gray-500"
      }`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}

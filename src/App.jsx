// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "@/pages/Home";
import Wallet from "@/pages/Wallet";
import SearchPage from "@/pages/search";
import Profile from "@/pages/Profile";
import "./App.css"; // optional

function App() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-sm">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

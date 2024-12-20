"use client";

import { useEffect } from "react";
import { FaUsers, FaProjectDiagram, FaTable, FaSignOutAlt } from "react-icons/fa";
import NavCard from "@/components/nav-card"; 

export default function Home() {
  useEffect(() => {
    const token = sessionStorage.getItem("token") || "";
    if (token === "") {
      window.location.href = "/auth";
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("url");
    sessionStorage.removeItem("key");
    sessionStorage.removeItem("token");
    window.location.href = "/auth";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full border border-gray-300">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-4 focus:ring-red-400 flex items-center gap-2"
        >
          <FaSignOutAlt />
          Log Out
        </button>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NavCard
            label="Users"
            icon={<FaUsers />}
            onClick={() => (window.location.href = "/users")}
          />
          <NavCard
            label="Projects"
            icon={<FaProjectDiagram />}
            onClick={() => (window.location.href = "/projects")}
          />
          <NavCard
            label="Tables"
            icon={<FaTable />}
            onClick={() => (window.location.href = "/tables")}
          />
        </div>
      </div>
    </div>
  );
}

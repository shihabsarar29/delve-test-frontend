import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const BackButton: React.FC = () => {

  return (
    <button
      onClick={() => window.location.href = "/"}
      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <FaArrowLeft />
      Back
    </button>
  );
};

export default BackButton;

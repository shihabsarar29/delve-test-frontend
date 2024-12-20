import React from "react";

interface NavCardProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const NavCard: React.FC<NavCardProps> = ({ label, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer bg-gray-700 hover:bg-gray-800 text-white text-lg font-medium py-6 px-4 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-gray-500 flex flex-col items-center justify-center gap-4"
    >
      <div className="text-4xl">{icon}</div>
      {label}
    </button>
  );
};

export default NavCard;

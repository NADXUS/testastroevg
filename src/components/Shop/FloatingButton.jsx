import React from "react";

const FloatingButton = ({ onClick, cartItemCount }) => {
  return (
    <div className="relative">
      {/* Botón flotante */}
      <button
        className="fixed bottom-16 right-16 bg-yellow-200 text-[#0D524C] rounded-full p-4 z-10 transition-all hover:bg-[#B4D564]"
        onClick={onClick}
      >
        {/* SVG para el carrito */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-[#0D524C]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l3 9h8l3-9h2M6 9h12l-1.5 5H7.5L6 9zM5 21a2 2 0 114 0 2 2 0 01-4 0zM15 21a2 2 0 114 0 2 2 0 01-4 0z"
          />
        </svg>
        {/* Contador de artículos en el carrito */}
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 flex justify-center items-center w-5 h-5 bg-red-600 text-white rounded-full text-xs z-10">
            {cartItemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
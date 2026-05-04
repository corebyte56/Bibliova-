import React from "react";

const BookCards = ({ book }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
          Featured
        </span>

        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ <span className="text-gray-600 text-xs">4.5</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-green-700 transition">
        {book.title}
      </h3>

      {/* Author */}
      <p className="text-sm text-gray-500 mt-1">
        by <span className="text-gray-700">{book.author}</span>
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
        {book.description}
      </p>

      {/* Bottom actions */}
      <div className="flex items-center justify-between mt-6">

        <button className="px-4 py-2 text-sm font-medium rounded-xl bg-[#085041] text-white hover:bg-[#0a6a55] transition cursor-pointer">
          View Details
        </button>

        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition">
          ❤️ <span>Save</span>
        </button>

      </div>

      {/* subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-green-50/40 to-transparent"></div>
    </div>
  );
};

export default BookCards;
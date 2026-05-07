"use client";

import { toast } from "react-toastify";

const BorrowButtons = () => {
  const handleBorrow = () => {
    toast.success("Book borrowed successfully!");
  };

  const handleWishlist = () => {
    toast.info("Added to wishlist ❤️");
  };

  return (
    <div className="flex flex-wrap gap-5 mt-12">
      <button
        onClick={handleBorrow}
        className="px-8 py-4 rounded-2xl bg-[#085041] text-white font-semibold hover:scale-105 hover:bg-[#0a6a55] transition-all duration-300 shadow-xl cursor-pointer"
      >
        Borrow Book
      </button>

      <button
        onClick={handleWishlist}
        className="px-8 py-4 rounded-2xl border border-gray-300 bg-white/70 backdrop-blur-xl text-gray-700 font-semibold hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        ❤️ Add Wishlist
      </button>
    </div>
  );
};

export default BorrowButtons;
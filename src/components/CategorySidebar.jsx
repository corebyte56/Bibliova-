"use client";

import { useState } from "react";

const CategorySidebar = ({ books, onSelectCategory }) => {
  const categories = ["All", ...new Set(books.map((b) => b.category))];

  const [active, setActive] = useState("All");

  const handleClick = (cat) => {
    setActive(cat);
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
  };

  return (
    <aside className="h-full w-full">
      
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-y-auto 
                      bg-white/70 backdrop-blur-xl 
                      border-r border-gray-200 
                      shadow-xl p-6">

        <h2 className="text-xl font-bold text-[#085041] mb-6">
          📚 Categories
        </h2>

        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`
                px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 border text-left
                ${
                  active === cat
                    ? "bg-[#085041] text-white border-[#085041]"
                    : "bg-white hover:bg-[#f3f7f5] text-gray-700 border-gray-200"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </aside>
  );
};

export default CategorySidebar;
import NavLink from "@/components/NavLink";
import Image from "next/image";
import React from "react";

const BookCards = ({ book }) => {
  console.log(book.image_url);
  return (
    <div className="group bg-white/80 backdrop-blur border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Badge */}
        <span className="absolute top-3 left-3 text-[10px] font-medium px-3 py-1 rounded-full bg-white/90 text-green-700">
          Featured
        </span>

        {/* Rating */}
        <span className="absolute top-3 right-3 text-white text-xs bg-black/50 px-2 py-1 rounded">
          ⭐ 4.5
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition line-clamp-1">
          {book.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          by <span className="text-gray-700">{book.author}</span>
        </p>

        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {book.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <NavLink href={`/books/${book.id}`} className="inline-block">
            <button className="px-4 py-2 text-sm font-medium rounded-xl bg-[#085041] text-white hover:bg-[#0a6a55] transition">
            View Details
          </button>
          </NavLink>

          <button className="text-sm text-gray-500 hover:text-red-500 transition">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCards;
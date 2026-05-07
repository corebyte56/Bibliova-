"use client";

import { useEffect, useState } from "react";
import BookCards from "@/app/UI/BookCards";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [active, setActive] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState([]);

  // fetch books
  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch("http://localhost:5001/books", {
        cache: "no-store",
      });
      const data = await res.json();

      setBooks(data);
      setFilteredBooks(data);
    }

    fetchBooks();
  }, []);

  // categories
  const categories = ["All", ...new Set(books.map((b) => b.category))];

  // filter handler
  const handleClick = (cat) => {
    setActive(cat);

    if (cat === "All") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((b) => b.category === cat)
      );
    }
  };

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 h-screen sticky top-0 overflow-y-auto 
                        bg-white/70 backdrop-blur-xl 
                        border-r border-gray-200 p-6">

        <h2 className="text-xl font-bold text-[#085041] mb-6">
          📚 Categories
        </h2>

        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`
                px-4 py-2 rounded-2xl text-sm font-medium transition-all border text-left
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
      </aside>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold mb-5">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <BookCards key={book.id} book={book} />
          ))}
        </div>

      </main>
    </div>
  );
}
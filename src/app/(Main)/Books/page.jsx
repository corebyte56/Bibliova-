"use client";

import { useEffect, useState } from "react";
import BookCards from "@/app/UI/BookCards";
import { Input, Button } from "@heroui/react";
import { Search } from "lucide-react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [active, setActive] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
        cache: "no-store",
      });
      const data = await res.json();

      setBooks(data);
      setFilteredBooks(data);
    }

    fetchBooks();
  }, []);

  // normalize helper (VERY IMPORTANT)
  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "") // remove all spaces
      .trim();

  const categories = ["All", ...new Set(books.map((b) => b.category))];

  // main filter function
  const applyFilter = (cat, searchText) => {
    let result =
      cat === "All" ? books : books.filter((b) => b.category === cat);

    if (searchText) {
      const query = normalize(searchText);

      result = result.filter((b) => normalize(b.title).includes(query));
    }

    setFilteredBooks(result);
  };

  // category click
  const handleCategory = (cat) => {
    setActive(cat);
    applyFilter(cat, search);
  };

  // search button click
  const handleSearch = () => {
    setSearch(tempSearch);
    applyFilter(active, tempSearch);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 h-screen sticky top-0 overflow-y-auto bg-white/70 backdrop-blur-xl border-r border-gray-200 p-6">
        <h2 className="text-xl font-bold text-[#085041] mb-6">📚 Categories</h2>

        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all border text-left cursor-pointer ${
                active === cat
                  ? "bg-[#085041] text-white border-[#085041]"
                  : "bg-white hover:bg-[#f3f7f5] text-gray-700 border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 container mx-auto px-6 py-12">
        {/* SEARCH BAR + BUTTON */}
        <div className="mb-8 flex gap-3 max-w-xl">
          <div className="relative flex-1">
            <Input
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              placeholder="Search books..."
              className="w-full"
              classNames={{
                inputWrapper:
                  "h-14 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl",
                input: "text-gray-800 placeholder:text-gray-400",
              }}
              startContent={<Search className="text-gray-500 w-5 h-5" />}
            />
          </div>

          <Button
            onClick={handleSearch}
            className=" px-6 bg-[#085041] text-white rounded-2xl hover:bg-[#0a6a55] transition"
          >
            Search
          </Button>
        </div>

        <h2 className="text-2xl font-bold mb-5">Featured Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <BookCards key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
}

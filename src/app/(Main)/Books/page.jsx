import BookCards from "@/app/UI/BookCards";
import NavLink from "@/components/NavLink";
import { Button } from "@heroui/react";

export default function BooksPage() {
  async function getBooks() {
  const res = await fetch("http://localhost:5001/books", {
    cache: "no-store",
  });

  return res.json();
}
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-5">Featured Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {getBooks().then((books) => books.map((book) => (
          <BookCards key={book.id} book={book} />
        )))}
      </div>

      <div className="mt-6 text-center">
      
      </div>
    </div>
    </div>
  );
}
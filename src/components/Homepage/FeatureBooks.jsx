import Link from "next/link";
import BookCards from "@/app/UI/BookCards";
import NavLink from "../NavLink";
import { Button } from "@heroui/react";

async function getBooks() {
    const res = await fetch("http://localhost:3000/BooksData.json", {
        cache: "no-store",
    });
    return res.json();
}

const FeatureBooks = async () => {
    const books = await getBooks();

    const previewBooks = books.slice(0, 12);

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-5">Featured Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {previewBooks.map((book) => (
                    <BookCards key={book.id} book={book} />
                ))}
            </div>

            <div className="mt-6 text-center">
                <NavLink
                    href ="/Books"
                    className="px-5 py-2 bg-black text-white rounded"
                >
                    <Button className="px-5 py-2 bg-black text-white rounded">
                        View All Books
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export default FeatureBooks;
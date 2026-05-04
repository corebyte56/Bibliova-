import Link from "next/link";
import BookCards from "@/app/UI/BookCards";

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
        <div>
            <h2 className="text-2xl font-bold mb-4">Featured Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {previewBooks.map((book) => (
                    <BookCards key={book.id} book={book} />
                ))}
            </div>

            <div className="mt-6 text-center">
                <Link
                    href="/books"
                    className="px-5 py-2 bg-black text-white rounded"
                >
                    View All
                </Link>
            </div>
        </div>
    );
};

export default FeatureBooks;
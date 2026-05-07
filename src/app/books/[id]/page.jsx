import Image from "next/image";
import BorrowButtons from "@/components/BorrowButtons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function getBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
  cache: "no-store",
  });

  return res.json();
}

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const books = await getBooks();

  const singleBook = books.find((book) => book.id.toString() === id);

  console.log(singleBook);

  if (!singleBook) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Book Not Found
      </div>
    );
  }

  return (
    
    <section className=" bg-gradient-to-br from-[#f5f7f2] via-[#eef5f2] to-[#f8f3eb] py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#085041]/30 to-[#EF9F27]/30 blur-3xl opacity-40 rounded-[40px]"></div>

            <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-white/40 bg-white/20 backdrop-blur-xl">
              <div className="relative h-[650px] w-full">
                <Image
                  src={singleBook.image_url}
                  alt={singleBook.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Category */}
            <span className="inline-block bg-[#085041]/10 text-[#085041] border border-[#085041]/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
              {singleBook.category}
            </span>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 leading-tight">
              {singleBook.title}
            </h1>

            {/* Author */}
            <p className="mt-5 text-xl text-gray-600">
              Written by{" "}
              <span className="font-bold text-[#085041]">
                {singleBook.author}
              </span>
            </p>

            {/* Description */}
            <p className="mt-8 text-gray-700 leading-9 text-lg">
              {singleBook.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 mt-10">
              <div className="bg-white/70 backdrop-blur-xl border border-gray-200 px-6 py-5 rounded-2xl shadow-sm min-w-[170px]">
                <p className="text-sm text-gray-500">Available Copies</p>
                <h3 className="text-3xl font-bold text-[#085041] mt-1">
                  {singleBook.available_quantity}
                </h3>
              </div>

              <div className="bg-white/70 backdrop-blur-xl border border-gray-200 px-6 py-5 rounded-2xl shadow-sm min-w-[170px]">
                <p className="text-sm text-gray-500">Reader Rating</p>
                <h3 className="text-3xl font-bold text-[#EF9F27] mt-1">
                  ⭐ 4.9
                </h3>
              </div>
            </div>

            {/* Buttons */}
            <BorrowButtons />
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;

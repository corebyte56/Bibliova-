const BooksLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto px-4 py-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 shadow-sm animate-pulse"
        >
          <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>

          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>

          <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>

          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default BooksLoader;
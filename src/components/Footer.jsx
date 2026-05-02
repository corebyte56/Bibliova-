import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#04342C] text-[#9FE1CB] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-[#E1F5EE] mb-2">
            Biblio<span className="text-[#EF9F27]">va</span>
          </h2>
          <p className="text-sm text-[#5DCAA5]">
            Your digital library, reimagined.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#E1F5EE] font-medium mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-[#EF9F27] transition-colors">Home</Link>
            <Link href="/books" className="hover:text-[#EF9F27] transition-colors">All Books</Link>
            <Link href="/login" className="hover:text-[#EF9F27] transition-colors">Login</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#E1F5EE] font-medium mb-3">Contact Us</h3>
          <p className="text-sm">bibliova.support@gmail.com</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-[#EF9F27] transition-colors text-sm">Facebook</a>
            <a href="#" className="hover:text-[#EF9F27] transition-colors text-sm">Twitter</a>
            <a href="#" className="hover:text-[#EF9F27] transition-colors text-sm">Instagram</a>
          </div>
        </div>

      </div>
      <div className="border-t border-[#0F6E56] text-center py-4 text-xs text-[#5DCAA5]">
        © 2025 Bibliova. All rights reserved.
      </div>
    </footer>
  );
}
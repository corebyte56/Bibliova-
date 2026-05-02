"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <nav className="bg-[#085041] text-[#E1F5EE] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left - Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#E1F5EE]">
          Biblio<span className="text-[#EF9F27]">va</span>
        </Link>

        {/* Center - Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[#EF9F27] transition-colors text-sm">
            Home
          </Link>
          <Link href="/books" className="hover:text-[#EF9F27] transition-colors text-sm">
            All Books
          </Link>
          {session && (
            <Link href="/profile" className="hover:text-[#EF9F27] transition-colors text-sm">
              My Profile
            </Link>
          )}
        </div>

        {/* Right - Auth */}
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <span className="text-sm text-[#9FE1CB]">{session.user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-[#EF9F27] text-[#412402] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FAC775] transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-[#EF9F27] text-[#412402] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FAC775] transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
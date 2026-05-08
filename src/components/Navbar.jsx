"use client";

import Link from "next/link";
import { Drawer, Button } from "@heroui/react";
import { ListMinus } from "lucide-react";
import NavLink from "./NavLink";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <nav className="bg-[#085041] text-[#E1F5EE] px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink href="/" className="text-2xl font-bold">
          Biblio<span className="text-[#EF9F27]">va</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "All Books", path: "/Books" },
            { name: "Why Choose Us", path: "/WhyChooseUs" },
            { name: "Contact Us", path: "/ContactUs" },
            ...(session ? [{ name: "My Profile", path: "/Profile" }] : []),
          ].map((item) => (
            <NavLink key={item.path} href={item.path} className="relative text-sm group">
              <span className="transition-colors duration-300 group-hover:text-[#EF9F27]">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#EF9F27] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!isPending && (
            session ? (
              <button
                onClick={handleLogout}
                className="bg-[#EF9F27] text-[#412402] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FAC775] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <NavLink href="/login">
                <button className="bg-[#EF9F27] text-[#412402] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FAC775] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
                  Login
                </button>
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Drawer */}
        <Drawer>
          <Button className="md:hidden" slot="trigger">
            <ListMinus />
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="right">
              <Drawer.Dialog>
                <Drawer.Header>
                  <Drawer.Heading>Menu</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  <div className="relative ml-auto h-full p-6 flex flex-col gap-5">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/Books">All Books</NavLink>
                    {session && <NavLink href="/Profile">My Profile</NavLink>}
                    <NavLink href="/WhyChooseUs">Why Choose Us</NavLink>
                    <NavLink href="/ContactUs">Contact Us</NavLink>
                    <hr className="border-[#0F6E56]" />
                    {session ? (
                      <button onClick={handleLogout} className="text-left">Logout</button>
                    ) : (
                      <NavLink href="/login">Login</NavLink>
                    )}
                  </div>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button fullWidth slot="close">Close</Button>
                </Drawer.Footer>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </nav>
  );
}
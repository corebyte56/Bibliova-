"use client";

import Link from "next/link";
import { useState } from "react";
import { Drawer, Button } from "@heroui/react";
import { HamburgerIcon, ListMinus } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#085041] text-[#E1F5EE] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Biblio<span className="text-[#EF9F27]">va</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "All Books", path: "/books" },
            { name: "My Profile", path: "/profile" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative text-sm group"
            >
              <span className="transition-colors duration-300 group-hover:text-[#EF9F27]">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#EF9F27] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <button className="bg-[#EF9F27] text-[#412402] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FAC775] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
              Login
            </button>
          </Link>
          <Link href="/logout">
            <button className="bg-[#EF9F27] text-[#412402] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FAC775] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
              Logout
            </button>
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <Drawer>
          <Button className="md:hidden">
            <ListMinus />
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="right">
              <Drawer.Dialog>
                <Drawer.Header>
                  <Drawer.Heading>Menu</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  <div className="relative ml-auto h-full p-6 flex flex-col gap-5 ">
                    

                    <Link href="/" onClick={() => setOpen(false)}>
                      Home
                    </Link>
                    <Link href="/books" onClick={() => setOpen(false)}>
                      All Books
                    </Link>
                    <Link href="/profile" onClick={() => setOpen(false)}>
                      My Profile
                    </Link>

                    <hr className="border-[#0F6E56]" />

                    <Link href="/login" onClick={() => setOpen(false)}>
                      Login
                    </Link>
                    <Link href="/logout" onClick={() => setOpen(false)}>
                      Logout
                    </Link>

                  </div>
                </Drawer.Body>
                <Drawer.Footer>
                  
                  <Button fullWidth slot={'close'}>Close</Button>
                </Drawer.Footer>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative ml-auto w-64 h-full bg-[#085041] text-white p-6 flex flex-col gap-5 shadow-xl">
            <h2 className="text-lg font-bold mb-2">Menu</h2>

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/books" onClick={() => setOpen(false)}>
              All Books
            </Link>
            <Link href="/profile" onClick={() => setOpen(false)}>
              My Profile
            </Link>

            <hr className="border-[#0F6E56]" />

            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link href="/logout" onClick={() => setOpen(false)}>
              Logout
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="mt-auto bg-[#EF9F27] text-[#412402] px-4 py-2 rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

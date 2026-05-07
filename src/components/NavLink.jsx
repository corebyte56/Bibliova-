"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        transition-all duration-300
        ${isActive ? "text-[#EF9F27]" : "text-inherit"}
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
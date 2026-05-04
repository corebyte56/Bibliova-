'use client';

import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <div>
      <Link href={href}>
        {children}
      </Link>
    </div>
  )
}

export default NavLink

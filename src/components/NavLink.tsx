"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}
function NavLink({ children, href }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link className={isActive ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}

export default NavLink;

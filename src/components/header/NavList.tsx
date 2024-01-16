"use client";
import NavLink from "@/components/header/NavLink";
import { NavItem } from "@/components/header/Navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface NavListProps {
  NavItems: NavItem[];
}

function NavList({ NavItems }: NavListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      gsap.to("#li", {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
      });
    },
    { scope: listRef },
  );

  return (
    <ul className={"flex gap-2"} ref={listRef}>
      {NavItems.map((NavItem) => (
        <li id="li" className={"hover:underline opacity-0"} key={NavItem.name}>
          <NavLink href={NavItem.href}>{NavItem.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavList;

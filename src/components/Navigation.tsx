import Link from "next/link";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";

const NavItems = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

function Navigation() {
  return (
    <aside className={"flex justify-between"}>
      <nav>
        <ul className={"flex gap-2"}>
          {NavItems.map((NavItem) => (
            <li className={"hover:underline"} key={NavItem.name}>
              <NavLink href={NavItem.href}>{NavItem.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSwitch />
    </aside>
  );
}

export default Navigation;

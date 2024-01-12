import NavLink from "@/components/NavLink";
import ThemeSwitch from "@/components/ThemeSwitch";
import NavList from "@/components/NavList";

export type NavItem = {
  name: string;
  href: string;
};

const NavItems: NavItem[] = [
  {
    name: "home",
    href: "/",
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
        <NavList NavItems={NavItems} />
      </nav>
      <ThemeSwitch />
    </aside>
  );
}

export default Navigation;

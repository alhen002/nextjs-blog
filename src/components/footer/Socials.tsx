import React from "react";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socialItems = [
  {
    name: "follow me",
    href: "https://www.threads.net/@alhen002",
  },
  {
    name: "github",
    href: "https://github.com/alhen002",
  },
];

function Socials() {
  return (
    <ul className="flex flex-col gap-2">
      {socialItems.map((socialItem) => (
        <li key={socialItem.name} className="underline flex items-end gap-0.5">
          <ArrowUpRight width={17} height={17} />
          <Link href={socialItem.href}>{socialItem.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Socials;

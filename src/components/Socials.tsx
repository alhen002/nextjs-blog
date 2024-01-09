import React from "react";
import Heading from "@/components/Heading";
import Link from "next/link";

const socialItems = [
  {
    name: "threads",
    href: "https://threads.com",
  },
  {
    name: "X",
    href: "https://threads.com",
  },
  {
    name: "github",
    href: "https://github.com",
  },
];
function Socials() {
  return (
    <div>
      <Heading>socials </Heading>
      <ul>
        {socialItems.map((socialItem) => (
          <li key={socialItem.name}>
            <Link href={socialItem.href}>{socialItem.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Socials;

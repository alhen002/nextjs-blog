import React from "react";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_QUERY } from "@/lib/sanity.queries";
import { client } from "@/lib/sanity.client";
import { General, Social } from "@/lib/types";
import CardWrapper from "@/components/ui/CardWrapper";

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

async function Socials() {
  const { socials } = await client.fetch<General>(SOCIAL_QUERY);
  return (
    <ul className="flex flex-col gap-2">
      {socials.map((socialItem) => {
        return !socialItem.isFavorite ? (
          <li
            key={socialItem.accountName}
            className="underline flex items-end gap-0.5"
          >
            <ArrowUpRight width={17} height={17} />
            <Link href={socialItem.accountURL}>{socialItem.accountName}</Link>
          </li>
        ) : (
          <CardWrapper key={socialItem.accountName} social={socialItem} />
        );
      })}
    </ul>
  );
}

export default Socials;

import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <Paragraph className={paragraphClasses}>{children}</Paragraph>;
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <Link
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </Link>
        );
      },
    },
  };

  return <PortableText components={components} value={value} />;
}

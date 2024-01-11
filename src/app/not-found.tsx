import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import React from "react";

export default function NotFound() {
  return (
    <section
      className={
        "animate-fade-in-top text-center flex flex-col gap-6 max-w-lg mx-auto"
      }
    >
      <Paragraph>Could not find requested resource.</Paragraph>
      <Link className="underline" href="/">
        Back Home
      </Link>
    </section>
  );
}

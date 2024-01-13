"use client"; // Error components must be Client Components

import React, { useEffect } from "react";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";
import Heading from "@/components/Heading";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section
      className={
        "animate-fade-in-top text-center flex flex-col gap-6 max-w-lg mx-auto"
      }
    >
      <Heading>Something went wrong!</Heading>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link className="underline" href="/public">
        Back Home
      </Link>
    </section>
  );
}

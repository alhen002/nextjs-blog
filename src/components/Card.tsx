import React from "react";
import Paragraph from "@/components/Paragraph";
import { ArrowUpRight } from "lucide-react";

function Card() {
  return (
    <div className="rounded border border-neutral-700 py-3 px-2 items-center flex justify-between dark:bg-neutral-800 bg-neutral-50 transition-colors duration-500">
      <div className="flex flex-col gap-0.5">
        <h2 className="tracking-tight font-medium">
          What makes A Great Developer Experience?
        </h2>
        <p className="text-neutral-400">35,958 views</p>
      </div>
      <ArrowUpRight className="hover:animate-rotate" />
    </div>
  );
}

export default Card;

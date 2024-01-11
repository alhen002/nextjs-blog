import React from "react";
import Paragraph from "@/components/Paragraph";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  href: string;
  className?: string;
}
function Card({ title, subtitle, icon, image, href, className }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "rounded border dark:border-neutral-700 dark:hover:border-neutral-400 border-neutral-400 hover:border-neutral-700 group py-3 px-4 items-center flex justify-between dark:bg-neutral-800 bg-neutral-50 transition-colors duration-500",
      )}
    >
      <div className="flex gap-4">
        {image ? (
          <div className="rounded-full h-12 w-12 border overflow-hidden grayscale">
            <Image src={image} alt="" width={124} height={124} />
          </div>
        ) : null}
        <div className="flex flex-col gap-0.5 justify-evenly">
          <h2 className="tracking-tight font-medium">{title}</h2>
          {subtitle ? <p className="text-neutral-400">{subtitle}</p> : null}
        </div>
      </div>
      {icon ? icon : null}
    </Link>
  );
}

export default Card;

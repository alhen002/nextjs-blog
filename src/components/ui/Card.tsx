import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  tags?: string[];
  href: string;
  className?: string;
}
export type Ref = HTMLAnchorElement;

const Card = forwardRef<Ref, CardProps>(function CardFunction(
  { title, tags, icon, image, href, className },
  ref,
) {
  return (
    <Link
      href={href}
      ref={ref}
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
          <div className="flex flex-row gap-1">
            {tags?.map((tag, index) => (
              <p className="text-neutral-400" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      {icon ? icon : null}
    </Link>
  );
});

export default Card;

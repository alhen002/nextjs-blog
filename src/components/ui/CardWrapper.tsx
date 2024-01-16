"use client";
import React, { useRef } from "react";
import { Instagram } from "lucide-react";
import Card from "@/components/ui/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Social } from "@/lib/types";
import { urlForImage } from "@/lib/sanity.image";

interface CardWrapperProps {
  social: Social;
}
function CardWrapper({ social }: CardWrapperProps) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(ref.current, {
      scrollTrigger: ref.current,
      opacity: 1,
      duration: 1,
      delay: 0.3,
    });
  });

  return (
    <div>
      <Card
        ref={ref}
        className="opacity-0 mb-4"
        image={urlForImage(social.accountImage)}
        href={social.accountURL}
        title={social.accountName}
        icon={<Instagram strokeWidth={1.25} />}
      />
    </div>
  );
}

export default CardWrapper;

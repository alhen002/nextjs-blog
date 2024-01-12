"use client";
import React, { useRef } from "react";
import { Instagram } from "lucide-react";
import Card from "@/components/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CardWrapper() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
      },
      x: 200,
      scrub: 1,
      duration: 2,
    });
  });

  return (
    <>
      <Card
        ref={ref}
        image={"/dackel.jpeg"}
        href="https://instagram.com/alhen002"
        title="@alhen002"
        icon={<Instagram strokeWidth={1.25} />}
      />
    </>
  );
}

export default CardWrapper;

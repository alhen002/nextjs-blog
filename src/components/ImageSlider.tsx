"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";

const Images = ["me.webp", "crash.jpeg", "dackel.jpeg"];
function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  function handleIncrease(index: number) {
    setCurrentImage(index);
  }

  // Auto Interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % Images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  // OnKeyPress

  return (
    <div className="flex flex-col gap-1">
      <Image
        src={`/${Images[currentImage]}`}
        alt={Images[currentImage].split(".")[0]}
        width={765}
        height={765}
        className="grayscale rounded-lg"
      />
      <div className="flex gap-2 mx-auto w-12">
        {Images.map((Image, index) => (
          <Circle
            key={index}
            onClick={() => handleIncrease(index)}
            className={
              currentImage === index
                ? "text-neutral-700 dark:text-neutral-100 hover:cursor-pointer"
                : " text-neutral-300 dark:text-neutral-700 hover:cursor-pointer"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

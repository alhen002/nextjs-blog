"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  auto?: boolean;
  timeInterval?: number;
}
function ImageSlider({ images, timeInterval = 3000, auto }: ImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleIncrease(index: number) {
    setCurrentImage(index);
  }

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, timeInterval);
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentImage, timeInterval, auto, images]);

  // OnKeyPress

  return (
    <div className="flex flex-col gap-1">
      <Image
        src={`/${images[currentImage]}`}
        alt={images[currentImage].split(".")[0]}
        width={765}
        height={765}
        className="grayscale rounded-lg"
      />
      <div className="flex gap-2 mx-auto w-12">
        {images.map((Image, index) => (
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

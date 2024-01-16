"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { Circle } from "lucide-react";
import Loading from "@/app/(frontend)/loading";
import { useSwipeable } from "react-swipeable";
import { urlForImage } from "@/lib/sanity.image";
import type { Image as ImageType } from "sanity";

interface ImageSliderProps {
  images: ImageType[];
  auto?: boolean;
  timeInterval?: number;
}
function ImageSlider({ images, timeInterval = 3000, auto }: ImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleIncrease(index: number) {
    setCurrentImage(index);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImage((prevImage) => (prevImage + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImage(
        (prevImage) => (prevImage - 1 + images.length) % images.length,
      ),
  });
  // auto
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

  return (
    <div className="flex flex-col gap-1 snap-x">
      <div className="flex flex-row gap-2" {...handlers}>
        <Suspense fallback={<Loading />}>
          <Image
            src={urlForImage(images[currentImage])}
            alt="asdf"
            width={765}
            height={765}
            className="grayscale rounded-lg snap-center"
          />
        </Suspense>
      </div>

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

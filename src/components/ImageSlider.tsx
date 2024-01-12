"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";
import Loading from "@/app/loading";
import { useSwipeable } from "react-swipeable";
import { images } from "next/dist/build/webpack/config/blocks/images";
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

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImage((prevImage) => (prevImage + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImage(
        (prevImage) => (prevImage - 1 + images.length) % images.length,
      ),
  });

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

  // implement ontouch functionality
  function handleTouchStart() {
    // handle touch start event
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-2" {...handlers}>
        <Suspense fallback={<Loading />}>
          <Image
            src={`/${images[currentImage]}`}
            alt={images[currentImage].split(".")[0]}
            width={765}
            height={765}
            className="grayscale rounded-lg"
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
